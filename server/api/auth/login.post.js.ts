import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
const secret = process.env.JWT_SECRET

const invalidCredentials = { statusCode: 401, body: { success: false, message: 'Invalid email or password' } }

export default  defineEventHandler(async (event) => {
    const { email, password } = await readBody(event)

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (!user) {
        return invalidCredentials
    }

    const validPassword = await bcrypt.compare(password, user.password)

    if (!validPassword) {
        return invalidCredentials
    }

    const token = jwt.sign({ id: user.id, email }, secret as string, { expiresIn: '1d' })

    return {
        statusCode: 200,
        body: {
          success: true,
          message: 'Login successful',
          token
        }
    }
})