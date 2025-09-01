"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Save, Printer as Print, FileText, Clock, User, Stethoscope, Shield, CheckCircle } from "lucide-react"

interface CatheterFormProps {
  onComplete: () => void
}

export function CatheterForm({ onComplete }: CatheterFormProps) {
  const [formData, setFormData] = useState({
    // General Information
    sex: "",
    service: "",
    diagnosis: "",
    reason: "",

    // Procedure
    handWashing: false,
    sterileField: false,
    sterileGloves: false,
    sterileAssisted: false,
    antiseptic: "",

    // Device
    catheterType: "",
    otherCatheter: "",
    caliber: "",
    balloonVolume: "",
    fixation: "",
    closedSystem: "",

    // Verification
    initialDrainage: "",
    urineCharacteristics: "",
    bladderVolume: "",
    balloonHeight: "",
    locationVerified: false,

    // Education
    patientEducation: false,
    urinaryControl: false,
    alarmSigns: false,

    // Observations
    observations: "",
    professionalSignature: "",
  })

  const [currentDateTime] = useState(
    new Date().toLocaleString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
  )

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    // Here you would typically save to database
    console.log("Form submitted:", formData)
    onComplete()
  }

  const generateReport = () => {
    // Generate and display report
    console.log("Generating report...")
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header with DateTime */}
      <Card className="bg-primary text-primary-foreground">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            <FileText className="h-6 w-6" />
            Nota de Colocación de Sonda Vesical
          </CardTitle>
          <CardDescription className="text-primary-foreground/80">Registro completo del procedimiento</CardDescription>
          <div className="flex items-center justify-center gap-2 mt-4 p-3 bg-primary-foreground/10 rounded-lg">
            <Clock className="h-4 w-4" />
            <span className="font-medium">Fecha y hora: {currentDateTime}</span>
          </div>
        </CardHeader>
      </Card>

      {/* General Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <User className="h-5 w-5" />
            Información General
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label className="text-base font-medium mb-3 block">Sexo</Label>
            <RadioGroup
              value={formData.sex}
              onValueChange={(value) => handleInputChange("sex", value)}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Masculino" id="masculino" />
                <Label htmlFor="masculino">Masculino</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Femenino" id="femenino" />
                <Label htmlFor="femenino">Femenino</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="service">Servicio</Label>
              <Input
                id="service"
                placeholder="Ej: Urgencias, UCI, Cirugía..."
                value={formData.service}
                onChange={(e) => handleInputChange("service", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="diagnosis">Diagnóstico</Label>
              <Input
                id="diagnosis"
                placeholder="Diagnóstico principal"
                value={formData.diagnosis}
                onChange={(e) => handleInputChange("diagnosis", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Motivo de colocación</Label>
            <Input
              id="reason"
              placeholder="Razón para la colocación de la sonda"
              value={formData.reason}
              onChange={(e) => handleInputChange("reason", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Procedure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <Shield className="h-5 w-5" />
            Procedimiento
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="handWashing"
                checked={formData.handWashing}
                onCheckedChange={(checked) => handleInputChange("handWashing", checked)}
              />
              <Label htmlFor="handWashing">Lavado de manos quirúrgico</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="sterileField"
                checked={formData.sterileField}
                onCheckedChange={(checked) => handleInputChange("sterileField", checked)}
              />
              <Label htmlFor="sterileField">Preparación de campo estéril</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="sterileGloves"
                checked={formData.sterileGloves}
                onCheckedChange={(checked) => handleInputChange("sterileGloves", checked)}
              />
              <Label htmlFor="sterileGloves">Uso de guantes estériles</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="sterileAssisted"
                checked={formData.sterileAssisted}
                onCheckedChange={(checked) => handleInputChange("sterileAssisted", checked)}
              />
              <Label htmlFor="sterileAssisted">Técnica estéril asistida</Label>
            </div>
          </div>

          <Separator />

          <div>
            <Label className="text-base font-medium mb-3 block">Antisepsia de genitales con:</Label>
            <RadioGroup
              value={formData.antiseptic}
              onValueChange={(value) => handleInputChange("antiseptic", value)}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Yodopovidona" id="yodopovidona" />
                <Label htmlFor="yodopovidona">Yodopovidona</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Clorhexidina" id="clorhexidina" />
                <Label htmlFor="clorhexidina">Clorhexidina</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      {/* Device Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <Stethoscope className="h-5 w-5" />
            Dispositivo Colocado
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label className="text-base font-medium mb-3 block">Tipo de sonda:</Label>
            <RadioGroup
              value={formData.catheterType}
              onValueChange={(value) => handleInputChange("catheterType", value)}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Foley" id="foley" />
                <Label htmlFor="foley">Foley</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Nelaton" id="nelaton" />
                <Label htmlFor="nelaton">Nelaton</Label>
              </div>
              <div className="flex items-center space-x-2 gap-4">
                <RadioGroupItem value="Otra" id="otra" />
                <Label htmlFor="otra">Otra:</Label>
                <Input
                  placeholder="Especificar"
                  className="max-w-xs"
                  value={formData.otherCatheter}
                  onChange={(e) => handleInputChange("otherCatheter", e.target.value)}
                />
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="caliber">Calibre (FR)</Label>
              <Input
                id="caliber"
                type="number"
                placeholder="Ej: 16"
                value={formData.caliber}
                onChange={(e) => handleInputChange("caliber", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="balloonVolume">Volumen inflado (cc)</Label>
              <Input
                id="balloonVolume"
                type="number"
                placeholder="Ej: 10"
                value={formData.balloonVolume}
                onChange={(e) => handleInputChange("balloonVolume", e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label className="text-base font-medium mb-3 block">Fijación:</Label>
            <RadioGroup
              value={formData.fixation}
              onValueChange={(value) => handleInputChange("fixation", value)}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Muslo derecho" id="muslo-derecho" />
                <Label htmlFor="muslo-derecho">Muslo derecho</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Muslo izquierdo" id="muslo-izquierdo" />
                <Label htmlFor="muslo-izquierdo">Muslo izquierdo</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label className="text-base font-medium mb-3 block">Conexión a sistema cerrado:</Label>
            <RadioGroup
              value={formData.closedSystem}
              onValueChange={(value) => handleInputChange("closedSystem", value)}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Sí" id="sistema-si" />
                <Label htmlFor="sistema-si">Sí</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="No" id="sistema-no" />
                <Label htmlFor="sistema-no">No</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      {/* Verification */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <CheckCircle className="h-5 w-5" />
            Verificación
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="initialDrainage">Drenaje inicial (ml)</Label>
              <Input
                id="initialDrainage"
                type="number"
                placeholder="Cantidad"
                value={formData.initialDrainage}
                onChange={(e) => handleInputChange("initialDrainage", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-base font-medium">Características de la orina:</Label>
              <RadioGroup
                value={formData.urineCharacteristics}
                onValueChange={(value) => handleInputChange("urineCharacteristics", value)}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Clara" id="clara" />
                  <Label htmlFor="clara">Clara</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Hemática" id="hematica" />
                  <Label htmlFor="hematica">Hemática</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Turbia" id="turbia" />
                  <Label htmlFor="turbia">Turbia</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bladderVolume">Volumen vesical previo (cc)</Label>
              <Input
                id="bladderVolume"
                type="number"
                placeholder="Estimación"
                value={formData.bladderVolume}
                onChange={(e) => handleInputChange("bladderVolume", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="balloonHeight">Altura globo post-colocación (cm)</Label>
              <Input
                id="balloonHeight"
                type="number"
                placeholder="Altura"
                value={formData.balloonHeight}
                onChange={(e) => handleInputChange("balloonHeight", e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="locationVerified"
              checked={formData.locationVerified}
              onCheckedChange={(checked) => handleInputChange("locationVerified", checked)}
            />
            <Label htmlFor="locationVerified">Verificación de ubicación correcta de la sonda por ecografía</Label>
          </div>
        </CardContent>
      </Card>

      {/* Education and Care */}
      <Card>
        <CardHeader>
          <CardTitle className="text-card-foreground">Educación y Cuidados</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="patientEducation"
              checked={formData.patientEducation}
              onCheckedChange={(checked) => handleInputChange("patientEducation", checked)}
            />
            <Label htmlFor="patientEducation">Se orienta al paciente/cuidador sobre cuidados de la sonda</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="urinaryControl"
              checked={formData.urinaryControl}
              onCheckedChange={(checked) => handleInputChange("urinaryControl", checked)}
            />
            <Label htmlFor="urinaryControl">Se deja indicación de control de gasto urinario horario</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="alarmSigns"
              checked={formData.alarmSigns}
              onCheckedChange={(checked) => handleInputChange("alarmSigns", checked)}
            />
            <Label htmlFor="alarmSigns">Se instruye sobre signos de alarma (dolor, hematuria, obstrucción)</Label>
          </div>
        </CardContent>
      </Card>

      {/* Observations */}
      <Card>
        <CardHeader>
          <CardTitle className="text-card-foreground">Observaciones Adicionales</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="observations">Observaciones</Label>
            <Textarea
              id="observations"
              placeholder="Escriba aquí cualquier observación adicional relevante..."
              className="min-h-[100px]"
              value={formData.observations}
              onChange={(e) => handleInputChange("observations", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="signature">Firma y cargo del profesional</Label>
            <Input
              id="signature"
              placeholder="Nombre completo y cargo"
              value={formData.professionalSignature}
              onChange={(e) => handleInputChange("professionalSignature", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button onClick={generateReport} variant="outline" className="flex items-center gap-2 bg-transparent">
          <FileText className="h-4 w-4" />
          Generar Reporte
        </Button>
        <Button onClick={() => window.print()} variant="outline" className="flex items-center gap-2">
          <Print className="h-4 w-4" />
          Imprimir
        </Button>
        <Button onClick={handleSubmit} className="flex items-center gap-2 bg-primary hover:bg-primary/90">
          <Save className="h-4 w-4" />
          Guardar Nota
        </Button>
      </div>
    </div>
  )
}
