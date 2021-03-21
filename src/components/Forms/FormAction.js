function FormAction({caption, onClick}){
  
  return(
    <button
      onClick={onClick}
      className="flex items-center justify-center px-3 py-0.5 bg-indigo-100 lg:w-1/12 w-3/12"
    >
      {caption}
    </button>
  );
}

export default FormAction;
