import { QMError, QMOpts } from "qwick-maffs";
import { DefineSetupFnComponent } from "vue";

type QwickMaffsVue = DefineSetupFnComponent<
	// Props
	{
		modelValue: number;
		opts?: QMOpts;
	} & Partial<QMOpts>,
	// Events
	{
		["update:modelValue"]: (modelValue: number) => void;
		error(error: QMError): void;
		undo(prev: string): void;
	}
>;

declare const QwickMaffsVue: QwickMaffsVue;

export default QwickMaffsVue;
