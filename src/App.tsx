import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">FAQs</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is your refund policy?</AccordionTrigger>
          <AccordionContent>
            We issue refunds within 30 days of purchase.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How do I change my password?</AccordionTrigger>
          <AccordionContent>
            Go to account settings → security → change password.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default App
