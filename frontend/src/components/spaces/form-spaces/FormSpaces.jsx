import { Formik, Form, Field } from 'formik';
import useCreateData from '../../../hooks/useCreateData';
import { AuthContext } from "../../../hooks/AuthProvider";
import { useContext } from 'react';
import { getInitialSpacesValues } from "../../../helpers/useModalFormHelper";
import useUpdateData from '../../../hooks/useUpdateData';

const FormSpaces = ({isEdit, space, onClose}) => {

    const { createData } = useCreateData();
    const {updateData} = useUpdateData();
    const { token } = useContext(AuthContext);

    const initialValues = getInitialSpacesValues(isEdit, space);
  
    const handleFormSubmit = async (values, { resetForm }) => {
      try{
        if(isEdit){
          console.log(values.id)
          await updateData({data:values, endpoint:"spaces", tokenUser: token})
          alert("Espacio actualizado correctamente");
        }else{
          await createData({data: values, endpoint:"spaces", tokenUser: token})
          alert("Espacio creado correctamente");
        }
        resetForm()
        onClose()
      } catch (error){
        console.log("Error al enviar los datos.", error.message)
      }
    };
    
  return (
    <div className='bg-white'>
      <h2 className="text-xl font-bold mb-4 text-center">{isEdit ? 'Editar Espacio': 'Crear Espacio'}</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
      >
        <Form className="space-y-4">
        <Field type="hidden" name="id" />
          <div>
            <label className="block text-sm font-medium">Nombre</label>
            <Field  name="nombre" type="text" className="w-full p-2 border rounded" required />
          </div>

          <div>
            <label className="block text-sm font-medium">Descripción</label>
            <Field as="textarea" name="descripcion" className="w-full p-2 border rounded" required />
          </div>

          <div>
            <label className="block text-sm font-medium">Capacidad</label>
            <Field name="capacidad" type="number" className="w-full p-2 border rounded" required />
          </div>

          <div>
            <label className="block text-sm font-medium">Precio por hora</label>
            <Field name="precio_por_hora" type="number" step="0.01" className="w-full p-2 border rounded" required />
          </div>

          <button type="submit" className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-700">{isEdit ? 'Editar': 'Crear Espacio'}
          </button>
        </Form>
      </Formik>
    </div>
  );
}
export default FormSpaces;