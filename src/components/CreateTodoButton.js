import '../styles/CreateTodoButton.css';

function CreateTodoButton( props ) {
    return (
        <button className="CreateTodoButton"
        onClick={
          () => {
            console.log("Le diste click al botón de Create ToDo");
          (props.setOpenModal(state => !state));
          }
        }> {/* Siempre es necesario añadir una funcion dentro del evento */}
        +</button>
    );
  }

export {CreateTodoButton};