import React, {useState} from 'react'

const BodyMeasurementForm = () => {
    const [viewImage, setViewImage] = useState(false);
    const [clothMaterial, setClothMaterial] = useState();
    const materials = [
        "Select", "Cotton", "silk", "Linen", "Wool"
    ]
    const [standardSizes, setStandardSizes] = useState();
    const sizes = [
        "Select", "S", "L", "X", "XS", "XL", "XXL", "XXL"
    ]
    const [clothColor, setClothColor] = useState();
    const colors = [
        "BLACK", "WHITE", "RED", "GREEN", "BLUE", "YELLOW", "ORANGE", "PINK", "PURPLE", "BROWN", "GRAY", "SILVER", "GOLD", "MAROON", "NAVY", "TEAL", "OLIVE", "LIME",
        "CYAN", "MAGENTA", "VIOLET", "INDIGO", "TURQUOISE", "CORAL", "SALMON", "KHAKI", "BEIGE", "IVORY", "TAN", "CHOCOLATE"
    ];
    const frontNeckDesigns = [
        "Round Neck", "Deep Round Neck", "Boat Neck", "Square Neck", "V Neck", "Deep V Neck", "U Neck", "Sweetheart Neck", "Scoop Neck", "Jewel Neck", "Crew Neck", "Keyhole Neck", "Oval Neck",
        "Pentagon Neck", "Hexagon Neck", "Pot Neck", "Princess Neck", "Paan Neck", "Leaf Neck", "Mango Neck", "Tulip Neck", "Lotus Neck", "Peacock Neck", "Collar Neck", "Chinese Collar Neck",
        "Mandarin Collar Neck", "Band Collar Neck", "Angrakha Neck", "Kurti Slit Neck", "Notched Neck", "Heart Neck", "Diamond Neck", "Tear Drop Neck", "Window Neck", "Illusion Neck", "Queen Anne Neck",
        "Portrait Neck", "Off Shoulder Neck", "One Shoulder Neck", "Asymmetrical Neck", "Cowl Neck", "Halter Neck", "Cape Neck", "Peter Pan Collar Neck"
    ];

    const backNeckDesigns = [
        "Round Back Neck", "Deep Round Back Neck", "Square Back Neck", "V Back Neck", "Deep V Back Neck", "U Back Neck", "Deep U Back Neck", "Boat Back Neck", "Oval Back Neck", "Pot Back Neck", "Deep Pot Neck",
        "Princess Back Neck", "Keyhole Back", "Teardrop Back", "Heart Shape Back", "Diamond Back", "Leaf Shape Back", "Mango Shape Back", "Butterfly Back", "Peacock Back", "Lotus Back",
        "Window Back", "Single Dori Back", "Double Dori Back", "Criss Cross Dori Back", "Tassel Dori Back", "Bow Tie Back", "Knot Back", "Rope Back Design", "Deep Back Neck", "Net Back Neck", "Sheer Back Neck", "Illusion Back Neck",
        "Cut Out Back", "Backless Design", "Multiple Strap Back", "Ladder Back", "Cage Back", "Tie Up Back", "Corset Back", "High Neck Back", "Collar Back", "Mandarin Collar Back",
        "Buttoned Back", "Zipper Back", "Jacket Style Back", "Cape Style Back"
    ];
    const commonFittingTypes = [
        "Body Fit", "Slim Fit", "Regular Fit", "Comfort Fit", "Loose Fit", "Princess Fit", "A Line Fit", "Anarkali Fit"
    ];
    const openingTypes = [
        "No Opening", "Front Open", "Back Open", "Side Open", "Front Zip", "Back Zip", "Side Zip", "Front Buttons", "Back Buttons", "Front Hooks", "Back Hooks", "Side Hooks", "Front Tie", "Back Tie",
        "Dori Back", "Loop Buttons", "Potli Buttons", "Front Placket", "Back Placket", "Hidden Zip", "Invisible Zip", "Corset Tie", "Velcro Closure"
    ];
    const sleeveLengths = [
        "Sleeveless", "Cap Sleeve", "Very Short Sleeve", "Short Sleeve", "Elbow Length", "Three Quarter Sleeve", "Full Sleeve", "Extra Full Sleeve"
    ];

    return (<>

        <div className='w-screen space-y-5 pt-24 md:px-15 bg-zinc-100'>
            <div
                className='px-5 flex flex-col sm:flex-row justify-between md:px-10  sm:grid-cols-2 gap-5 border-5 border-blue-950 w-full rounded shadow-xl bg-white'>
                <div className='flex flex-col gap-5'>
                    <p className='font-extrabold text-2xl text-blue-950'>Body Measurements</p>
                    <h1 className='font-extrabold'>Basic Details:</h1>
                    <div className='flex flex-col sm:flex-row flex-wrap gap-5'>
                        <div>
                            <p> Clothing Material Type </p>
                            <select className='border text-center w-full h-10 rounded'>
                                {materials.map((material, index) => {
                                    return <option key={index} value={material}>{material}</option>
                                })}
                            </select>
                        </div>
                        <div>
                            <p> Standard Size </p>
                            <select className='border text-center w-full h-10 rounded'>
                                {sizes.map((size, index) => {
                                    return <option key={index} value={size}>{size}</option>
                                })}
                            </select>
                        </div>
                        <div>
                            <p> Colour of cloth </p>
                            <select className='border text-center w-full h-10 rounded'
                                    value={clothColor}
                                    onChange={(e) => setClothColor(e.target.value)}>
                                {
                                    colors.map((color, index) => {
                                        return <option value={color} key={index}>{color}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>

                </div>
                <div className='flex items-center '>
                    <p className='font-bold w-40 text-zinc-500'>See How to measure <span className='underline'>click on Image</span>
                    </p>
                    <img
                        className='h-50 w-auto cursor-pointer object-contain border-2 shadow-xl duration-500 hover:scale-105 active:scale-100'
                        onClick={() => setViewImage(true)}
                        src="/src/assets/images/Measurement.png" alt="Measurement Images"/>

                    {viewImage && (
                        <div
                            className='absolute w-screen top-7 sm:top-14 fixed inset-0 bg-black/20 h-145 backdrop-blur flex justify-center items-center'>
                            <img className='shadow-2xl h-100 sm:h-140 w-screen object-contain'
                                 src="/src/assets/images/Measurement.png" alt="Measurement Images"/>
                            <p className='text-lg top-15 sm:text-4xl right-2 sm:right-20 fixed bg-white/4 rounded-full px-2 text-white duration-500 cursor-pointer hover:scale-105 active:scale-100'
                               onClick={() => setViewImage(false)}
                            >x</p>
                        </div>
                    )}
                </div>
            </div>

            <div className='border-5 border-blue-950 flex flex-col flex-wrap rounded gap-5 p-5 sm:p-10 shadow-xl bg-white'>
                <p className='font-extrabold text-2xl text-blue-500'>Choose Your Custom Design</p>
                <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    <div>
                        <p> Front Neck Designs </p>
                        <select className='border text-center w-full h-10 rounded'>
                            {frontNeckDesigns.map((design, index) => {
                                return <option key={index} value={design}>{design}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <p> Back Neck Designs </p>
                        <select className='border text-center w-full h-10 rounded'>
                            {backNeckDesigns.map((design, index) => {
                                return <option key={index} value={design}>{design}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <p> Fitting Type </p>
                        <select className='border text-center w-full h-10 rounded'>
                            {commonFittingTypes.map((fit, index) => {
                                return <option key={index} value={fit}>{fit}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <p> Sleeve Length </p>
                        <select className='border text-center w-full h-10 rounded'>
                            {sleeveLengths.map((length, index) => {
                                return <option key={index} value={length}>{length}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <p> Type of Opening And Closing - side </p>
                        <select className='border text-center w-full h-10 rounded'>
                            {openingTypes.map((openClose, index) => {
                                return <option className='' key={index} value={openClose}>{openClose}</option>
                            })}
                        </select>
                    </div>
                </div>
            </div>

            <div
                className='border-5 border-blue-950 flex flex-col flex-wrap rounded gap-5 p-5 sm:p-10 shadow-xl bg-white'>
                <p className='font-extrabold text-2xl text-blue-950'>Specific Measurements</p>
                <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    <div>
                        <p>Full Length</p>
                        <input className='border w-full h-10 rounded pl-10 pr-1' step="0.01" type="number"
                               placeholder="Inches"/>
                    </div>
                    <div>
                        <p>Bust</p>
                        <input className='border w-full h-10 rounded pl-10 pr-1' step="0.01" type="number"
                               placeholder="Inches"/>
                    </div>
                    <div>
                        <p>Waist</p>
                        <input className='border w-full h-10 rounded pl-10 pr-1' step="0.01" type="number"
                               placeholder="Inches"/>
                    </div>
                    <div>
                        <p>Shoulder Width</p>
                        <input className='border w-full h-10 rounded pl-10 pr-1' step="0.01" type="number"
                               placeholder="Inches"/>
                    </div>
                    <div>
                        <p>Sleeve Length</p>
                        <input className='border w-full h-10 rounded pl-10 pr-1' step="0.01" type="number"
                               placeholder="Inches"/>
                    </div>
                    <div>
                        <p>Sleeve Round</p>
                        <input className='border w-full h-10 rounded pl-10 pr-1' step="0.01" type="number"
                               placeholder="Inches"/>
                    </div>
                    <div>
                        <p>Front Neck Depth</p>
                        <input className='border w-full h-10 rounded pl-10 pr-1' step="0.01" type="number"
                               placeholder="Inches"/>
                    </div>
                    <div>
                        <p>Back Neck Depth</p>
                        <input className='border w-full h-10 rounded pl-10 pr-1' step="0.01" type="number"
                               placeholder="Inches"/>
                    </div>
                    <div>
                        <p>Hip</p>
                        <input className='border w-full h-10 rounded pl-10 pr-1' step="0.01" type="number"
                               placeholder="Inches"/>
                    </div>
                    <div>
                        <p>Rise</p>
                        <input className='border w-full h-10 rounded pl-10 pr-1' step="0.01" type="number"
                               placeholder="Inches"/>
                    </div>
                    <div>
                        <p>Thigh</p>
                        <input className='border w-full h-10 rounded pl-10 pr-1' step="0.01" type="number"
                               placeholder="Inches"/>
                    </div>
                    <div>
                        <p>Calf</p>
                        <input className='border w-full h-10 rounded pl-10 pr-1' step="0.01" type="number"
                               placeholder="Inches"/>
                    </div>
                    <div>
                        <p>Ankle</p>
                        <input className='border w-full h-10 rounded pl-10 pr-1' step="0.01" type="number"
                               placeholder="Inches"/>
                    </div>
                    <div>
                        <p>Instep</p>
                        <input className='border w-full h-10 rounded pl-10 pr-1' step="0.01" type="number"
                               placeholder="Inches"/>
                    </div>
                </div>
                <div className='border-t-2'>
                    <p className='font-bold'>Message:</p>
                    <textarea className='border w-full p-5'/>
                </div>
            </div>
            <div className='flex justify-center items-center border-5 border-blue-950 p-5 sm:p-10 bg-white'>
                <button
                    className='bg-blue-950 rounded py-2 px-10 text-white font-bold transition-all active:scale-100 hover:scale-105 duration-500'>Next
                </button>
            </div>
        </div>

    </>)
}
export default BodyMeasurementForm