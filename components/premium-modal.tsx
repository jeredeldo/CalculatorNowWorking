"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Lock, Sparkles } from "lucide-react"

interface PremiumModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PremiumModal({ open, onOpenChange }: PremiumModalProps) {
  const features = [
    "Cálculos ilimitados",
    "Operaciones básicas (+, -, ×, ÷)",
    "Función de porcentaje",
    "Números decimales",
    "Historial de operaciones",
    "Modo oscuro premium",
    "Soporte prioritario 24/7",
    "Sin anuncios",
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-accent rounded-full">
              <Lock className="w-8 h-8 text-accent-foreground" />
            </div>
          </div>
          <DialogTitle className="text-2xl text-center text-balance">Desbloquea CalcPro Premium</DialogTitle>
          <DialogDescription className="text-center text-balance">
            Para ver resultados de cálculos, necesitas actualizar a nuestro plan profesional
          </DialogDescription>
        </DialogHeader>

        <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
          <div className="flex items-baseline justify-center gap-2 mb-4">
            <span className="text-4xl font-bold text-foreground">$35</span>
            <span className="text-muted-foreground">USD/mes</span>
          </div>

          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Plan Pro</span>
          </div>

          <div className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-0.5">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12">
            Actualizar a Pro - $35/mes
          </Button>

          <p className="text-xs text-center text-muted-foreground mt-4">
            Cancela en cualquier momento. Sin compromisos.
          </p>
        </Card>

        <Button variant="ghost" onClick={() => onOpenChange(false)} className="w-full text-muted-foreground">
          Tal vez después
        </Button>
      </DialogContent>
    </Dialog>
  )
}
