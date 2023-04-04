import React from 'react';

const Question = () => {
    return (
        <section className='py-14 space-y-6 bg-slate-900 text-slate-50'>
            <h2 className='text-center font-bold text-4xl'>Some Important Question</h2>
            <div className='w-5/6 lg:w-3/6 mx-auto space-y-4'>
                <div className="collapse collapse-plus collapse-open shadow shadow-slate-600">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        01. Difference between props vs state?
                    </div>
                    <div className="collapse-content text-slate-300">
                        <p>Props and State are both important and core topics in React. But they serve different purposes.</p>
                        <p>Props are used to pass data from parent component to child component. Props are passed down as a set of key-value pairs and they are read only. That means Child component can't change it's props directly.</p>
                        <p>State is data that can be change over time. Props are read-only, while state is mutable, means it can be updated using special function useState().</p>
                    </div>
                </div>
                <div className="collapse collapse-plus shadow shadow-slate-600">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        02. How does useState work?
                    </div>
                    <div className="collapse-content text-slate-300">
                        <p>useState() is a special hook in react that allows add state in functional component. We can add a state variable and a function for update that state using useState(). When the state is updated then React is automatically re-render the component and update the UI.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus shadow shadow-slate-600">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        03. How does react work?
                    </div>
                    <div className="collapse-content text-slate-300">
                        <p>React is a Javascript library for building user interfaces. React use component for create small piece of application. Each component is a small piece for use to build a complex and bigger structure. Reacts work by the track of state. State is like memory of component. React also uses <span className='font-bold'>Virtual DOM</span> to make updating the web page faster. When the state of a component changes, React compares the Virtual DOM and Real DOM and only updates the part of the UI that need to changes using <span className='font-bold'>diffing algorithm</span>.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus shadow shadow-slate-600">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        04. What is the purpose of using useEffect other than fetching data?
                    </div>
                    <div className="collapse-content">
                        <h2 className='mb-3'>React special hook useEffect() used to handle side effects in functional components. Side effects means any action that occurs to outer the scope of the component. It is not only used for fetching data from an API. Here are some use cases-</h2>
                        <p>01. Conditionally run an effect when certain dependencies change.</p>
                        <p>02. Update a component's state in response to a prop change:</p>
                        <p>02. Clean up after an effect when the component unmounts</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Question;