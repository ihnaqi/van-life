
export default function Van(props) {
    return(
        <div className='van-content'>
            <img src={props.vanImg} className='van-img' alt='Van Image' />
            <section className='type-and-price'>
                <div className='van-left'>
                    <h3 className='van-name'> {props.name} </h3>
                    <button type='button' className={`van-button ${props.type}`}> {props.type} </button>
                </div>
                <div>
                    <h3 className='van-name'> {`$${props.price}`} </h3>
                    <p className='van-per-day'> /day </p>
                </div>
            </section>
        </div>
    )
}