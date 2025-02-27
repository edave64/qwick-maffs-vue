<script setup lang="ts">
import { exec, type QMError } from "qwick-maffs";
import { ref, watch } from "vue";

const emit = defineEmits<{
	error: [QMError];
}>();

const inputValue = defineModel<number>();
const actualValue = ref("");

watch(inputValue, (inVal) => {
	actualValue.value = inVal == null ? "" : inVal.toString();
});

function onKeyDown(e: KeyboardEvent) {
	if (e.key === "Enter") {
		const result = exec(actualValue.value);
		if (typeof result === "number") {
			inputValue.value = result;
		} else {
			emit("error", result);
		}
	}
}
</script>

<template>
	<input @keydown="onKeyDown" v-model="actualValue" />
</template>
