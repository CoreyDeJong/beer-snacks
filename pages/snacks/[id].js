import { useRouter } from 'next/router'
import axios from 'axios'


export default function SnackDetail(props) {

    const url = 'https://beer-full-stack-api.herokuapp.com/api/v1/beer/';

    const router = useRouter();

    async function deleteHandler() {

        const response = await axios.delete(url + props.snack.id)

        router.push('/');
    }

    return (
        <>
        <h1>I am a single snack {props.snack.name}</h1>
        <button onClick={() => deleteHandler(props.snack.id)}>Delete</button>
        </>
    )
}

export async function getServerSideProps(context) {
    const response = await fetch(`https://beer-full-stack-api.herokuapp.com/api/v1/beer/${context.params.id}`);
    const snack = await response.json();
    console.log('snack',snack)
    return {
        props: {
            snack
        }
    }
}
