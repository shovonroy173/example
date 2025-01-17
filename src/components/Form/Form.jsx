const Form = () => {
  return (
    // <form>
      <div className="flex relative">
        <label htmlFor="email" className="">
          Email Address
        </label>
        <input placeholder="Email Address" type="text" id="email" name="email" className=""/>
      </div>
    // </form>
  );
};

export default Form;
