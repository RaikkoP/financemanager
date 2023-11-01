import Filters from "../Filters/Filters";
import Form from "../Form/Form";
import Header from "../Header/Header";

export default function Dashboard()  {
    
    return (
        <div>
            <Header></Header>
            <Form></Form>
            <Filters></Filters>
        </div>
    )
}