function FormField({ type, id, fname, onChange, caption, value, error, labelClassName, containerClassName, ...attr}){
  return (
    <section className="w-10/12 border-2 border-gray-500 border-solid">
      <input
          type={type}
          id={id}
          name={fname}
          onChange={onChange}
          value={value}
          {...attr}
      />
        {(error && true) ? (<section>{error}</section>):null }
    </section>
  )
}

export default FormField;
