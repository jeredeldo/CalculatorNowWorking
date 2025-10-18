"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PremiumModal } from "@/components/premium-modal"
import { CableIcon as CalcIcon } from "lucide-react"

export function Calculator() {
  const [display, setDisplay] = useState("0")
  const [previousValue, setPreviousValue] = useState<string | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)

  const handleNumber = (num: string) => {
    if (display === "0") {
      setDisplay(num)
    } else {
      setDisplay(display + num)
    }
  }

  const handleOperation = (op: string) => {
    setPreviousValue(display)
    setOperation(op)
    setDisplay("0")
  }

  const handleClear = () => {
    setDisplay("0")
    setPreviousValue(null)
    setOperation(null)
  }

  const handleEquals = () => {
    // Aquí es donde bloqueamos y mostramos el modal de pago
    setShowModal(true)
  }

  const handleDecimal = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".")
    }
  }

  const buttons = [
    { label: "C", onClick: handleClear, className: "bg-slate-200 hover:bg-slate-300 text-slate-900" },
    { label: "±", onClick: () => {}, className: "bg-slate-200 hover:bg-slate-300 text-slate-900" },
    {
      label: "%",
      onClick: () => handleOperation("%"),
      className: "bg-slate-200 hover:bg-slate-300 text-slate-900",
    },
    {
      label: "÷",
      onClick: () => handleOperation("/"),
      className: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    { label: "7", onClick: () => handleNumber("7"), className: "bg-slate-700 hover:bg-slate-600 text-white" },
    { label: "8", onClick: () => handleNumber("8"), className: "bg-slate-700 hover:bg-slate-600 text-white" },
    { label: "9", onClick: () => handleNumber("9"), className: "bg-slate-700 hover:bg-slate-600 text-white" },
    {
      label: "×",
      onClick: () => handleOperation("*"),
      className: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    { label: "4", onClick: () => handleNumber("4"), className: "bg-slate-700 hover:bg-slate-600 text-white" },
    { label: "5", onClick: () => handleNumber("5"), className: "bg-slate-700 hover:bg-slate-600 text-white" },
    { label: "6", onClick: () => handleNumber("6"), className: "bg-slate-700 hover:bg-slate-600 text-white" },
    {
      label: "-",
      onClick: () => handleOperation("-"),
      className: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    { label: "1", onClick: () => handleNumber("1"), className: "bg-slate-700 hover:bg-slate-600 text-white" },
    { label: "2", onClick: () => handleNumber("2"), className: "bg-slate-700 hover:bg-slate-600 text-white" },
    { label: "3", onClick: () => handleNumber("3"), className: "bg-slate-700 hover:bg-slate-600 text-white" },
    {
      label: "+",
      onClick: () => handleOperation("+"),
      className: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    {
      label: "0",
      onClick: () => handleNumber("0"),
      className: "bg-slate-700 hover:bg-slate-600 text-white col-span-2",
    },
    { label: ".", onClick: handleDecimal, className: "bg-slate-700 hover:bg-slate-600 text-white" },
    { label: "=", onClick: handleEquals, className: "bg-orange-600 hover:bg-orange-700 text-white" },
  ]

  return (
    <>
      <Card className="w-full max-w-sm p-6 shadow-2xl">
        <div className="mb-6 flex items-center gap-3">
          <div className="p-2 bg-primary rounded-lg">
            <CalcIcon className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">CalcPro</h1>
            <p className="text-xs text-muted-foreground">Professional Edition</p>
          </div>
        </div>

        <div className="mb-4 p-6 bg-secondary rounded-lg text-right">
          <div className="text-sm text-muted-foreground mb-1 h-5">
            {previousValue && operation && `${previousValue} ${operation}`}
          </div>
          <div className="text-4xl font-mono font-bold text-foreground break-all">{display}</div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {buttons.map((button, index) => (
            <Button
              key={index}
              onClick={button.onClick}
              className={`h-16 text-lg font-semibold ${button.className}`}
              style={button.label === "0" ? { gridColumn: "span 2" } : {}}
            >
              {button.label}
            </Button>
          ))}
        </div>

        <div className="mt-4 text-center text-xs text-muted-foreground">
          <p>Versión gratuita limitada</p>
        </div>
      </Card>

      <PremiumModal open={showModal} onOpenChange={setShowModal} />
    </>
  )
}
