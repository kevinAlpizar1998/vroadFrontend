


import React, { useState, useEffect } from "react";
import Tarea from "../components/Tarea";

const ListadoTareas = ({ tareas, setTareaEditar, eliminarTarea }) => {
  const [contadorTareas, setContadorTareas] = useState(0);

  useEffect(() => {
    setContadorTareas(tareas.length);
  }, [tareas]);

  const handleEliminarTarea = (id) => {
    eliminarTarea(id);
  };

  return (
    <div className="">
      <h2>{contadorTareas ? `Tareas (${contadorTareas})` : "No Hay Tarea"}</h2>

<<<<<<< HEAD
      {Array.isArray(tareas) && tareas.length > 0 ? (
        tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            tarea={tarea}
            setTareaEditar={setTareaEditar}
            eliminarTarea={() => handleEliminarTarea(tarea.id)}
          />
        ))
      ) : (
        <p>No hay tareas disponibles.</p>
      )}
=======
      {Array.isArray(tareas) && tareas.length > 0
        ? tareas.map((tarea) => (
            <Tarea
              key={tarea.id}
              tarea={tarea}
              setTareaEditar={setTareaEditar}
              eliminarTarea={eliminarTarea}
            />
          ))
        : null}
>>>>>>> ee4f3442e8afab4a958c8ba4700c908979a4ce30
    </div>
  );
};

export default ListadoTareas;

<<<<<<< HEAD






























//SIN "CONTADOR"
=======
>>>>>>> ee4f3442e8afab4a958c8ba4700c908979a4ce30
// // ListadoTareas.jsx
// import React from "react";
// import Tarea from "../components/Tarea";

// const ListadoTareas = ({ tareas, setTareaEditar, eliminarTarea }) => {
//   return (
//     <div className="">
//       <h2>{tareas.length ? "Tareas" : "No Hay Tarea"}</h2>

//       {Array.isArray(tareas) && tareas.length > 0 ? (
//         tareas.map((tarea) => (
//           <Tarea
//             key={tarea.id}
//             tarea={tarea}
//             setTareaEditar={setTareaEditar}
//             eliminarTarea={eliminarTarea}
//           />
//         ))
//       ) : (
//         <p>No hay tareas disponibles.</p>
//       )}
//     </div>
//   );
// };

// export default ListadoTareas;

//FUNCIONA EN EL BORRRRRAR
// // ListadoTareas.jsx
// import React from "react";
// import Tarea from "../components/Tarea";

// const ListadoTareas = ({ tareas, setTareaEditar, eliminarTarea }) => {
//   return (
//     <div className="">
//       <h2>{tareas.length ? 'Tareas' : 'No Hay Tarea'}</h2>

//       {tareas.map(tarea => (
//         <Tarea
//           key={tarea.id}
//           tarea={tarea}
//           setTareaEditar={setTareaEditar}
//           eliminarTarea={eliminarTarea}
//         />
//       ))}
//     </div>
//   );
// };

// export default ListadoTareas;

//antes
// import React from "react";
// import Tarea from "../components/Tarea";

// const ListadoTareas = ({ tareas, setTareaEditar }) => {
//   return (
//     <div className="">
//       <h2>{tareas.length ? 'Tareas' : 'No Hay Tarea'}</h2>

//       {tareas.map(tarea => (
//         <Tarea

//         key={tarea.id}
//          tarea={tarea}
//         //  SE LE APLICA A CADA UNA DE LAS TAREAS
//          setTareaEditar={setTareaEditar}

//          />
//       ))}
//     </div>
//   );
// };

// export default ListadoTareas;

// import React from "react";

// const ListadoTareas = () => {
//   return (
//     <div className="">
//  <h2>{tareas.length ? 'Tareas' : 'No Hay Tarea'}</h2>

//     </div>
//   );
// };

// export default ListadoTareas;
