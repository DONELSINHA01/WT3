import Image from './Image';

const UserData=({users})=>{
    return(
        <>
        {
            users.map((curUser)=>{
                const {picture,name,email,gender}= curUser;
                return (
                    <tr>
                        <td><Image image={picture.large}/></td>
                        <td>{name.first}</td>
                        <td>{email}</td>
                        <td>{gender}</td>
                    </tr>
                )
            })
        }
        </>
    );
}

export default UserData;