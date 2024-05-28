// Quick Lab 2 - Creating your first component

const Calc = () => {

    const username = "Emily";
    const age = 8;

    return(

        <div>
            <p> { username } is { age } years old


            </p>


            <p>
                in less than 2 weeks { username } will be { age + 1 } years old on the 7th of June;


            </p>
        </div>


    );
}

export default Calc;

