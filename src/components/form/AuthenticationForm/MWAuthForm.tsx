import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValues?: Record<string, any>;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

const MWAuthForm = ({ onSubmit, children, defaultValues }: TFormProps) => {
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const method = useForm(formConfig);
  return (
    <FormProvider {...method}>
      <form
        onSubmit={method.handleSubmit(onSubmit)}
        className="flex justify-center flex-col"
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default MWAuthForm;
