import { ErrorMessage, Formik, Field } from "formik";

function App() {
  return (
    <section>
      <article className="w-full max-w-screen-lg mx-auto mt-20 p-8 bg-containerMainColor rounded-lg">
        <h1 className="mb-5 font-medium text-3xl text-darkendGreen capitalize">
          contact us
        </h1>
        <Formik

        // initialValues={}
        >
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <div className="w-full">
                <div>
                  <p className="pb-2 capitalize text-darkendGreen">
                    first name *
                  </p>
                  <Field
                    type="text"
                    name="firstName"
                    className="w-full p-3 border-[1px] border-darkendGreen rounded-md"
                  />
                </div>
                <ErrorMessage
                  name="firstName"
                  component="p"
                  className="text-errorColor"
                />
              </div>
              <div className="w-full">
                <div>
                  <p className="pb-2 capitalize text-darkendGreen">
                    second name *
                  </p>
                  <Field
                    type="text"
                    name="secondName"
                    className="w-full p-3 border-[1px] border-darkendGreen rounded-md"
                  />
                </div>
                <ErrorMessage
                  name="secondName"
                  component="p"
                  className="text-errorColor"
                />
              </div>
            </div>

            <div className="w-full">
              <div>
                <p className="pb-2 capitalize text-darkendGreen">
                  email adress *
                </p>
                <Field
                  type="text"
                  name="emailAdress"
                  className="w-full p-3 border-[1px] border-darkendGreen rounded-md"
                />
              </div>
              <ErrorMessage
                name="emailAdress"
                component="p"
                className="text-errorColor"
              />
            </div>
            <div className="flex gap-5 flex-wrap">
              <p className="w-full capitalize">query type</p>
              <ErrorMessage
                name="radioGroup"
                component="p"
                className="text-errorColor"
              />
              <div className="flex-1 w-6/12">
                <div className="flex">
                  <Field
                    type="radio"
                    name="radioGroup"
                    className="w-full p-3 border-[1px] border-darkendGreen rounded-md"
                  />
                  <p className="w-full pb-2 capitalize text-darkendGreen">
                    general enquiry
                  </p>
                </div>
              </div>
              <div className="flex-1 w-6/12">
                <div className="flex">
                  <Field
                    type="radio"
                    name="radioGroup"
                    className="w-full p-3 border-[1px] border-darkendGreen rounded-md"
                  />
                  <p className="w-full pb-2 capitalize text-darkendGreen">
                    support request
                  </p>
                </div>
                <ErrorMessage
                  name="secondName"
                  component="p"
                  className="text-errorColor"
                />
              </div>
            </div>
          </div>
        </Formik>
      </article>
    </section>
  );
}

export default App;
