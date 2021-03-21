function Form({children}){
  return (
    <form className="flex flex-row justify-center w-9/12 px-4 align-center my-7">
        {children}
    </form>
  );
}

export default Form;
