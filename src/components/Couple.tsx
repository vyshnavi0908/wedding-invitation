import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { Particles } from "./Particles";
import { translations } from "@/lib/translations";
import couplePhoto from "@/assets/couple-photo.jpg";

export function Couple({ lang = "en" }: { lang?: "en" | "te" }) {
  const t = translations[lang];

  return (
    <section id="couple" className="relative overflow-hidden px-6 py-16">
      <Particles count={25} />
      <SectionTitle
        eyebrow={t.theCouple}
        title={lang === "en" ? "Priya & Ravikanth" : "ప్రియ & రవికాంత్"}
        subtitle={t.coupleSubtitle}
      />

      <div className="relative z-10 mx-auto mt-14 max-w-4xl">
        {/* Unified Couple Landscape Frame */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="group relative glass-card overflow-hidden rounded-3xl p-3 hover:gold-glow"
        >
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
            <img
              src={couplePhoto}
              alt="Priya and Ravikanth"
              className="h-full w-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0205]/40 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Bride & Groom Symmetrical Details */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="glass-card rounded-3xl p-5 sm:p-8 border border-gold/15 flex flex-col justify-between"
          >
            <div>
              <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.4em] text-[#9d7931] font-bold">
                {t.theBride}
              </p>
              <h3 className="gold-gradient mt-3 font-serif text-3xl font-medium">
                {lang === "en" ? "Venkata Satya Priya" : "వేంకట సత్యప్రియ"}
              </h3>
              <p className="font-serif text-sm sm:text-base italic text-[#6b4021] mt-1.5 font-semibold">
                {t.brideDegree}
              </p>
              <p className="font-sans text-xs sm:text-sm tracking-wide text-[#5f4b34] mt-2 leading-relaxed">
                {t.brideEdu}
              </p>
              <div className="gold-divider my-5 w-20" />

              <div className="space-y-4">
                <div>
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#9d7931] font-bold">
                    {t.parents}
                  </p>
                  <p className="font-serif text-base italic text-[#5f4b34] mt-1 font-medium leading-relaxed">
                    {lang === "en" ? "D/o Sri Kallakuri Gollababu" : "శ్రీ కాళ్ళకూరి గొల్లబాబు"}
                  </p>
                  <p className="font-serif text-base italic text-[#5f4b34] font-medium leading-relaxed">
                    {lang === "en"
                      ? "& Smt. Phanibhanu Jayasree"
                      : "& శ్రీమతి ఫణిభాను జయశ్రీల పుత్రిక"}
                  </p>
                </div>

                <div>
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#9d7931] font-bold">
                    {t.divineBlessings}
                  </p>
                  <p className="font-serif text-base italic text-[#5f4b34] mt-1 font-medium leading-relaxed">
                    {lang === "en"
                      ? "Late Sri. Kallakuri Suryanarayana Rao"
                      : "దివంగత శ్రీ కాళ్ళకూరి సూర్యనారాయణ రావు"}
                  </p>
                  <p className="font-serif text-base italic text-[#5f4b34] font-medium leading-relaxed">
                    {lang === "en"
                      ? "& Late Smt. Veeravenkata Satyavathi"
                      : "& దివంగత శ్రీమతి వీరవెంకట సత్యవతిల పౌత్రి"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="glass-card rounded-3xl p-5 sm:p-8 border border-gold/15 flex flex-col justify-between"
          >
            <div>
              <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.4em] text-[#9d7931] font-bold">
                {t.theGroom}
              </p>
              <h3 className="gold-gradient mt-3 font-serif text-3xl font-medium">
                {lang === "en" ? "Ravikanth" : "రవికాంత్"}
              </h3>
              <p className="font-serif text-sm sm:text-base italic text-[#6b4021] mt-1.5 font-semibold">
                {t.groomDegree}
              </p>
              <p className="font-sans text-xs sm:text-sm tracking-wide text-[#5f4b34] mt-2 leading-relaxed">
                {t.groomEdu}
              </p>
              <div className="gold-divider my-5 w-20" />

              <div className="space-y-4">
                <div>
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#9d7931] font-bold">
                    {t.familyBlessings}
                  </p>
                  <p className="font-serif text-base italic text-[#5f4b34] mt-1 font-medium leading-relaxed">
                    {t.familyBlessingsText1}
                  </p>
                  <p className="font-serif text-base italic text-[#5f4b34] font-medium leading-relaxed">
                    {t.familyBlessingsText2}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
