import React from "react";
import Layout from "../components/Layout";
const Eco = () => {
  return (
    <Layout>
      <div className="container fullWidth flexCenter">
        <div className="eco">
          <h1>Servicios Ecológicos</h1>
          <div className="video">
            <iframe
              className="frameYoutube"
              src="https://www.youtube.com/embed/tkb6uD2OYbY"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <p>
            La tendencia ecologista que se expandió al mercado funerario, cada
            vez son más numerosas las empresas que fabrican ataúdes ecológicos
            con materiales naturales que se descomponen sin dejar residuos
            contaminantes.
          </p>

          <p>
            El proceso de entierro de un ser humano genera grandes residuos
            contaminantes que incluyen desde la cantidad de madera necesaria
            para la fabricación de ataúdes hasta el barniz que se utiliza para
            lograr el brillo requerido. Sin embargo, los ataúdes no son los
            únicos causantes de tóxicos, sino que también la cremación genera
            emisiones de gases producidos por los materiales utilizados para la
            construcción del ataúd. Esto se ve aún más profundizado por la
            milenaria práctica de arrojar las urnas con las cenizas al mar o
            esparcirlas en el campo.
          </p>

          <p>
            Los ataúdes ecológicos se pueden quemar junto con el cuerpo si la
            familia opta por incinerarlo exigiendo un menor tiempo de
            incineración y empleando la mitad de gas que los ataúdes
            tradicionales. En el caso de que se decida realizar el entierro,
            debido a sus componentes estos ataúdes se desintegran en unos pocos
            meses. Queremos incorporar la opción ECOLOGICA de velación, que
            consiste en utilizar un estuche de madera que se puede reutilizar y
            sirve como cofre durante la velación.
          </p>

          <p>
            La cantidad de árboles necesarios para realizar un ataúd
            convencional permite fabricar 100 ataúdes de cartón reciclable.
          </p>

          <p>
            Se trata de ataúdes biodegradables sometidos a un proceso de
            tratamiento para controlar los niveles de acidez en su interior y
            anular cualquier fuga derivada de la descomposición del cadáver. Al
            no poseer ceras, metales y barnices no contaminan el agua
            subterránea de los cementerios y pueden utilizarse como nutrientes
            para la tierra. Además, necesitan la mitad del gas y del tiempo para
            obtener las mismas cenizas que los ataúdes tradicionales.
          </p>
          <a
            href="mailto:operaciones@prever.com.bo"
            className="button fullWidth"
          >
            contactar operaciones@prever.com.bo
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Eco;
