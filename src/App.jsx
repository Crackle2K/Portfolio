import { useEffect, useState } from 'react'
import Boba from './components/Boba.jsx'
import Footer from './components/Footer.jsx'
import ToppingButton from './components/ToppingButton.jsx'
import Enhancements from './components/Enhancements.jsx'

function App() {

  const [bobucks, setBobucks] = useState(0)
  const [bpc, setBpc] = useState(1)
  const [cps, setCps] = useState(0)

  const [upgrades, setUpgrades] = useState([
    { id: 'cursor', name: 'Extra Tapioca', type: 'click', cost: 10, value: 1, owned: 0, visibleAt: 0 },
    { id: 'shop', name: 'Sweet Syrup', type: 'click', cost: 50, value: 2, owned: 0, visibleAt: 10 },
    { id: 'barista', name: 'Barista', type: 'cps', cost: 200, value: 5, owned: 0, visibleAt: 50 },
    { id: 'stirrer', name: 'Auto Stirrer', type: 'cps', cost: 1500, value: 8, owned: 0, visibleAt: 300 },
    { id: 'divinemilk', name: 'Divine Milk', type: 'cps', cost: 4300, value: 20, owned: 0, visibleAt: 2000 },
    { id: 'factory', name: 'Boba Factory', type: 'cps', cost: 10000, value: 100, owned: 0, visibleAt: 8000 },
    { id: 'pristinemilk', name: 'Pristine Milk', type: 'cps', cost: 12500, value: 105, owned: 0, visibleAt: 8000}
  ])

  const [enhancements, setEnhancements] = useState([
    { id: 'luckyPearl', name: 'Lucky Pearl', type: 'lucky', cost: 150, reward: 100, chance: 100, owned: 0, visibleAt: 20 },
    { id: 'miniJackpot', name: 'Mini Jackpot', type: 'lucky', cost: 900, reward: 1000, chance: 1000, owned: 0, visibleAt: 500 }
  ])

  const handleBobaClick = () => {
    setBobucks((prev) => {
      let next = prev + bpc
      enhancements.forEach((e) => {
        if (e.owned > 0 && e.type === 'lucky') {
          for (let i = 0; i < e.owned; i++) {
            if (Math.floor(Math.random() * e.chance) === 0) {
              next += e.reward
            }
          }
        }
      })
      return next
    })
  }

  const purchaseUpgrade = (id) => {
    setUpgrades((prev) => {
      const u = prev.map((up) => {
        if (up.id !== id) return up
  if (bobucks < up.cost) return up
  setBobucks((b) => Math.max(0, b - up.cost))
        if (up.type === 'click') setBpc((c) => c + up.value)
        if (up.type === 'cps') setCps((c) => c + up.value)
        return { ...up, owned: up.owned + 1, cost: Math.ceil(up.cost * 1.15) }
      })
      return u
    })
  }
  const purchaseEnhancement = (id) => {
    setEnhancements((prev) => {
      const next = prev.map((en) => {
        if (en.id !== id) return en
        if (bobucks < en.cost) return en
        setBobucks((b) => Math.max(0, b - en.cost))
        return { ...en, owned: en.owned + 1, cost: Math.ceil(en.cost * 1.2) }
      })
      return next
    })
  }
  useEffect(() => {
    const id = setInterval(() => {
      if (cps > 0) setBobucks((b) => b + cps)
    }, 1000)
    return () => clearInterval(id)
  }, [cps])

  return (
    <>
      <h1>BOBA BUILDER</h1>
  <Boba onBobaClick={handleBobaClick} bpc={bpc} bobucks={bobucks} />
      <ToppingButton
        upgrades={upgrades}
        bobucks={bobucks}
        purchaseUpgrade={purchaseUpgrade}
      />
      <Enhancements
        enhancements={enhancements}
        bobucks={bobucks}
        purchaseEnhancement={purchaseEnhancement}
      />
      <Footer />
    </>
  )
}

export default App
