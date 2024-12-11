import { Field, Form, Formik } from "formik";

const SearchBar = ({ onChangeQuery }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
    onChangeQuery(values.query);
  };
  return (
    <div>
      <header>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <Field
              name="query"
              type="text"
              // autocomplete="off"
              // autofocus
              placeholder="Search images and photos"
            />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </header>
      {/* <header>
        <form>
          <input           
          />
          <button type="submit">Search</button>
        </form>
      </header> */}
    </div>
  );
};

export default SearchBar;
