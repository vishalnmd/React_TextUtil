function About(props){
    return(
        <>
        <div className="accordion mt-5 mx-5" data-bs-theme={props.mode==='light'? 'light':'dark'} id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    History
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>I site owner is a backend java developer</strong> he also has prior experience in wpf dot, salesforce and 1 year experience in java.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    About Us
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Currently the we are trying to raise our knowledge base.</strong> Hence we are trying to learn react framework which enables us to create single page application which are interactive and looks beautiful.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Free to reach us
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>We are open to collab and share what ever experience we persist.</strong> You can reach us through linkedin instagram telegram or any social media plateform. Collaboratioin and sharing knowledge is a wise and good way for growing together.
                </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default About;