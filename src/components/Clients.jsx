import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () =>
{
    return (
        <section className={`${styles.flexStart} items-center my-3 flex-wrap w-full`}>
            {clients.map((client) => (
                <div className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] my-3`} key={client.id}>
                    <img src={client.logo} className={`sm:w-[192px] w-[100px] object-contain ${client.id === "client-3" ? `pb-[12px]` : `pb-0`}`} alt="logo" />
                </div>
            ))}
        </section>
    )
}

export default Clients