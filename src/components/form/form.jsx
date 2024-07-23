import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { z } from 'zod';
import { InputField } from "./input-field";

export const Form = () => {
  const schema = z.object({
    test: z.number().min(1),
  })

  const methods = useForm({
    resolver: zodResolver(schema),
  })
  
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => {console.log('データ', data)})}>
        <InputField name={'test'} />
        <input type="submit" />
      </form>
    </FormProvider>
  )
}
