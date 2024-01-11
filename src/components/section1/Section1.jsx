import React from 'react'
import p1 from '../../img/p1.png'
import p2 from '../../img/p2.png'
import p3 from '../../img/p3.png'
import p4 from '../../img/p5.png'
import p5 from '../../img/p4.png'
import p6 from '../../img/p6.png'

const Section1 = () => {
  return (
    <section>
        <div className="flex py-10 flex-col space-y-5 items-center">
            {/* Text */}
                <p className="text-slate-600 text-sm">Trusted by 5,000+ Companies Worldwide</p>
            {/* Company Logo */}
            <div className="flex justify-center space-x-8 md:space-x-11 items-center  flex-wrap">
                <img src={p1} alt="" className=' h-6 mb-3 '/>
                <img src={p2} alt="" className=' h-6 mb-3 '/>
                <img src={p3} alt="" className=' h-6 mb-3 '/>
                <img src={p4} alt="" className=' h-6 mb-3 '/>
                <img src={p5} alt="" className=' h-6 mb-3 '/>
                <img src={p6} alt="" className=' h-6 mb-3 '/>
            </div>
        </div>
      
    </section>
  )
}

export default Section1
