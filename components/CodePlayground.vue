<template>
  <div class="border border-gray-600 bg-neutral-800 text-white rounded-lg shadow-lg overflow-hidden">
    <div class="flex justify-between items-center border-b p-4 border-gray-600">
      <h2 class="text-lg font-semibold text-yellow-400">JavaScript Playground</h2>
      <div class="flex space-x-2">
        <button class="text-gray-400 hover:text-white" @click="copyCode">
          <i class="pi pi-copy"></i>
        </button>
        <button class="text-gray-400 hover:text-white" @click="resetCode">
          <i class="pi pi-refresh"></i>
        </button>
        <button class="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400" @click="runCode">
          <i class="pi pi-play mr-2"></i>Run
        </button>
      </div>
    </div>
    <div class="p-4 bg-neutral-900">
      <div class=" p-2">
        <div class="relative">
          <div
              class="w-full text-green-400 overflow-auto code-editor"
              style="font-family: 'Fira Code', monospace; height: 240px; white-space: pre;"
              contenteditable="true"
              @input="updateCode($event)"
          >
            {{ code }}
          </div>
        </div>
      </div>
      <div class="bg-neutral-800 m-1 p-4 mt-4 rounded-lg">
        <p class="text-gray-400">Console Output:</p>
        <pre class="text-green-400 whitespace-pre-wrap p-2 rounded-lg">{{ output || 'No output' }}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const code = ref<string>("for (let i = 1; i < 5; i++) {\n  console.log(i);\n}");
const output = ref<string>('');

const updateCode = (event: Event) => {
  const target = event.target as HTMLDivElement;
  code.value = target.innerText;
};

const runCode = () => {
  try {
    // Capture console.log output
    const logs: string[] = [];
    const originalConsoleLog = console.log;
    console.log = (...args: any[]) => {
      logs.push(args.join(' '));
    };

    // Execute the code
    // eslint-disable-next-line no-eval
    eval(code.value);

    // Restore console.log
    console.log = originalConsoleLog;

    output.value = logs.join('\n');
  } catch (err: any) {
    output.value = `Error: ${err.message}`;
  }
};

const resetCode = () => {
  code.value = "for (let i = 1; i < 5; i++) {\n  console.log(i);\n}";
  output.value = '';
};

const copyCode = () => {
  navigator.clipboard.writeText(code.value).then(
      () => alert('Code copied to clipboard!'),
      () => alert('Failed to copy code.')
  );
};
</script>

<style scoped>
textarea {
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  color: #10b981; /* Tailwind green-400 */
}
pre {
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  color: #10b981;
}

[contenteditable] {
  font-family: 'Fira Code', monospace;
  font-size: 14px;

  caret-color: white;
}

.code-editor {
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  color: #10b981; /* Tailwind green-400 */
  background-color: #2f3437; /* Tailwind gray-800 */
  padding: 10px;
  border-radius: 5px;
  white-space: pre-wrap;
}
.code-editor .keyword {
  color: #66d9ef; /* синий цвет ключевых слов */
}

.code-editor .string {
  color: #a6e22e; /* зеленый цвет строк */
}

.code-editor .number {
  color: #ae81ff; /* фиолетовый цвет чисел */
}

.code-editor .function {
  color: #f92672; /* красный цвет функций */
}

.code-editor .variable {
  color: #fd971f; /* оранжевый цвет переменных */
}

[contenteditable]::selection {
  background: #2563eb;
  color: white;
}
</style>
