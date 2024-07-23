import { useFormContext } from "react-hook-form"

export const InputField = ({
  name
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div>
      <label>{name}</label>
      <input
        type="number"
        {...register(name, {
          valueAsNumber: true,
        })}
      />
      {errors[name]?.message && <p>{errors[name]?.message}</p>}
    </div>
  )
}
