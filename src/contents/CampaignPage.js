import First from '../components/Campaign/First';
import Second from '../components/Campaign/Second';
import Footer from '../components/Footer';
import NavbarT from '../components/NavbarT';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../components/NotFound';

function CampaignPage() {
    
    window.scrollTo(0,0); 

    const [purpose, setPurpose]     = useState();
    const [title, setTitle]         = useState();
    const [name, setName]           = useState();
    const [detail, setDetail]       = useState();
    const [donateNow, setDonateNow] = useState();
    const [donateTarget, setDonateTarget] = useState();
    const [imagePath, setImagePath] = useState();

    const [error, setError]         = useState();

    const { id } = useParams();
    useEffect(() => {
        fetch("https://api.kanti.pw/playcrowd/data/" + id)
        .then(res => res.json())
        .then((result) => {
            let data = result.result;
            if (data === "CAMPAIGN_NOT_FOUND") {
                return setError("ไม่พบโครงการ")
            } else {
                setPurpose(data[0].purpose)
                setTitle(data[0].campaign_name)
                setName(data[0].name)
                setDetail(data[0].details_camp)
                setDonateNow(data[0].donated)
                setDonateTarget(data[0].money)
                setImagePath(data[0].picture)
            }
        })
    })

    return(
        <>
            <NavbarT />
            {!error ? (
                    <>
                        <motion.div
                            exit={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <First purpose={purpose} title={title} detail={detail} donateNow={donateNow} donateTarget={donateTarget} />
                            <div style={{ borderBottom: "1px solid black" }}></div>
                            <Second name={name} id={id} />
                            <div style={{ borderBottom: "1px solid black" }}></div>
                            <Footer />
                        </motion.div>
                    </>
                ) : (
                    <>
                    <motion.div
                        exit={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <NotFound />
                    </motion.div>
                    <Footer pos={{ position: "absolute" }} />
                    </>
                )
            }
        </>
    );
}

export default CampaignPage;