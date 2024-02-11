import React, { useState } from 'react'
import {FAQsData} from './Data'
import FAQ from './FAQ'

export default function FAQS() {
    const [Faqs , setFaqsData] = useState (FAQsData)
  return (
    <main>
    <section>
    {Faqs.map((Faq) =>  <FAQ key = {Faq.id} { ...Faq} /> )}
    </section>
    </main>
  )
}
