<script setup lang="ts">
import { exec, type QMOpts, type QMError } from "qwick-maffs";
import { computed, ref, watch } from "vue";

const emit = defineEmits<{
	error: [QMError];
	undo: [string];
}>();

const props = defineProps<
	{
		opts?: QMOpts;
	} & Partial<QMOpts>
>();

const inputValue = defineModel<number>();
const actualValue = ref("");

watch(
	inputValue,
	(inVal) => {
		actualValue.value = inVal == null ? "" : inVal.toString();
	},
	{ immediate: true }
);

const opts = computed(() => {
	const options: Partial<QMOpts> = props.opts ?? {};

	if (props.supportENotation != null) {
		options.supportENotation = props.supportENotation;
	}
	if (props.constants != null) {
		options.constants = props.constants;
	}
	if (props.decimalSep != null) {
		options.decimalSep = props.decimalSep;
	}
	if (props.functions != null) {
		options.functions = props.functions;
	}
	if (props.ignoreErrors != null) {
		options.ignoreErrors = props.ignoreErrors;
	}
	if (props.operators != null) {
		options.operators = props.operators;
	}

	return options;
});

function onKeyDown(e: KeyboardEvent) {
	if (e.key === "Enter") {
		apply();
	}
	if (e.key === "Escape") {
		const oldValue = actualValue.value;
		const inVal = inputValue.value;
		actualValue.value = inVal == null ? "" : inVal.toString();
		emit("undo", oldValue);
	}
}

function apply() {
	const result = exec(actualValue.value, opts.value);
	if (typeof result === "number") {
		inputValue.value = result;
	} else {
		emit("error", result);
	}
}
</script>

<template>
	<input @keydown="onKeyDown" @blur="apply" v-model="actualValue" />
</template>
