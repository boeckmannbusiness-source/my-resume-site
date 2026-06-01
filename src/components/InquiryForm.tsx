import { useState } from "react";
import { z } from "zod";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  budget: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1).max(1000),
});

const InquiryForm = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(t("services.inquiry.error.invalid"));
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "inquiry-notification",
          recipientEmail: "moin@julianboeckmann.de",
          idempotencyKey: `inquiry-${crypto.randomUUID()}`,
          templateData: {
            name: parsed.data.name,
            email: parsed.data.email,
            budget: parsed.data.budget || "—",
            message: parsed.data.message,
          },
        },
      });
      if (error) throw error;
      toast.success(t("services.inquiry.success"));
      setForm({ name: "", email: "", budget: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error(t("services.inquiry.error.generic"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="inquiry"
      className="mt-20 p-8 md:p-10 rounded-lg border border-border bg-card"
    >
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">
          {t("services.inquiry.label")}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-3">
          {t("services.inquiry.title")}
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          {t("services.inquiry.intro")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-5 max-w-2xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="grid gap-2">
            <Label htmlFor="iq-name">{t("services.inquiry.name")}</Label>
            <Input
              id="iq-name"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={t("services.inquiry.name.placeholder")}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="iq-email">{t("services.inquiry.email")}</Label>
            <Input
              id="iq-email"
              type="email"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder={t("services.inquiry.email.placeholder")}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="iq-budget">{t("services.inquiry.budget")}</Label>
          <Input
            id="iq-budget"
            maxLength={100}
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
            placeholder={t("services.inquiry.budget.placeholder")}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="iq-message">{t("services.inquiry.message")}</Label>
          <Textarea
            id="iq-message"
            required
            rows={6}
            maxLength={1000}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder={t("services.inquiry.message.placeholder")}
          />
        </div>
        <Button type="submit" disabled={loading} className="justify-self-start">
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {t("services.inquiry.submit")}
        </Button>
      </form>
    </section>
  );
};

export default InquiryForm;
