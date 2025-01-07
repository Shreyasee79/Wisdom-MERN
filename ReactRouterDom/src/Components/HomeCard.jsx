import './HomeCard.css'

const HomeCard = ({data}) => {
    return (
        <>
            <div className="sem">
                <h2>{data[0]}</h2>
                <ul>
                    <li>{data[1]}</li>
                    <li>{data[2]}</li>
                    <li>{data[3]}</li>
                    <li>{data[4]}</li>
                    <li>{data[5]}</li>
                </ul> 
            </div>
        </>
    )
}

export default HomeCard