import { useState, useEffect, useRef } from "react";

const ContactUsModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    description: "",
  });

  const [focused, setFocused] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileWidgetId = useRef(null);

  // Load Turnstile script
  useEffect(() => {
    if (!document.getElementById("turnstile-script")) {
      const script = document.createElement("script");
      script.id = "turnstile-script";
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (isOpen && window.turnstile) {
      const timer = setTimeout(() => {
        const container = document.getElementById("turnstile-container");
        if (container && !turnstileWidgetId.current) {
          turnstileWidgetId.current = window.turnstile.render(
            "#turnstile-container",
            {
              sitekey: "0x4AAAAAACXKRSZAcp5qBqCs",
              callback: (token) => {
                console.log("Turnstile token received:", token);
                setTurnstileToken(token);
              },
              "error-callback": (error) => {
                console.error("Turnstile error:", error);
                setError("Ошибка верификации. Пожалуйста, попробуйте еще раз.");
              },
              "expired-callback": () => {
                console.log("Turnstile token expired");
                setTurnstileToken("");
              },
              theme: "light",
              size: "normal",
            },
          );
        }
      }, 100);

      return () => clearTimeout(timer);
    }

    // Reset widget when modal closes
    if (!isOpen && turnstileWidgetId.current) {
      try {
        window.turnstile?.reset(turnstileWidgetId.current);
      } catch (e) {
        console.error("Error resetting turnstile:", e);
      }
      turnstileWidgetId.current = null;
      setTurnstileToken("");
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!turnstileToken) {
      setError("Пожалуйста, пройдите проверку безопасности");
      return;
    }

    console.log("Submitting with token:", turnstileToken);
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("http://10.40.9.114:8000/api/v1/public", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Turnstile-Token": turnstileToken,
        },
        body: JSON.stringify({
          name: formData.name,
          phone_number: formData.phone,
          message: formData.description,
        }),
      });

      console.log("Response status:", response.status);

      const responseData = await response.json().catch(() => null);
      console.log("Response data:", responseData);

      if (!response.ok) {
        throw new Error(
          responseData?.detail ||
            responseData?.message ||
            "Не удалось отправить сообщение",
        );
      }

      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: "", phone: "", description: "" });
        setTurnstileToken("");
        if (turnstileWidgetId.current && window.turnstile) {
          window.turnstile.reset(turnstileWidgetId.current);
        }
        onClose?.();
      }, 2000);
    } catch (err) {
      console.error("Submission error:", err);
      setError(err.message || "Произошла ошибка. Попробуйте еще раз.");
      setIsSubmitting(false);

      // Reset Turnstile on error
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.reset(turnstileWidgetId.current);
        setTurnstileToken("");
      }
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Work+Sans:wght@400;500;600&display=swap');
        
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes overlayFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          0% {
            transform: translateY(10px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes checkmark {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        
        .contact-modal-overlay {
          animation: overlayFadeIn 0.3s ease-out;
        }
        
        .contact-modal-content {
          animation: modalFadeIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .input-wrapper {
          position: relative;
        }
        
        .input-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #000;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .input-wrapper.focused .input-line {
          width: 100%;
        }
        
        .success-checkmark {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: checkmark 0.6s ease-out forwards;
        }
        
        .form-field {
          animation: slideUp 0.5s ease-out backwards;
        }
        
        .form-field:nth-child(1) { animation-delay: 0.1s; }
        .form-field:nth-child(2) { animation-delay: 0.2s; }
        .form-field:nth-child(3) { animation-delay: 0.3s; }
        .form-field:nth-child(4) { animation-delay: 0.4s; }
        .form-field:nth-child(5) { animation-delay: 0.5s; }
        
        .error-shake {
          animation: shake 0.4s ease-in-out;
        }

        .turnstile-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 65px;
        }
      `}</style>

      <div
        className="contact-modal-overlay fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <div
          className="contact-modal-content relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-neutral-200"
          onClick={(e) => e.stopPropagation()}
          style={{ fontFamily: "'Work Sans', sans-serif" }}
        >
          {/* Subtle decorative line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neutral-900 to-transparent"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-900 hover:text-white transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="relative p-8 md:p-12">
            {!isSuccess ? (
              <>
                {/* Header */}
                <div className="mb-10">
                  <h2
                    className="text-4xl md:text-5xl font-bold mb-3 text-neutral-900"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Свяжитесь с нами
                  </h2>
                  <p className="text-neutral-600 text-base">
                    Мы будем рады услышать вас. Отправьте нам сообщение, и мы
                    ответим как можно скорее.
                  </p>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="error-shake mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm font-medium flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {error}
                    </p>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Name Input */}
                  <div
                    className={`form-field input-wrapper ${
                      focused === "name" ? "focused" : ""
                    }`}
                  >
                    <label className="block text-xs font-semibold text-neutral-900 mb-3 uppercase tracking-wider">
                      Имя
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused("")}
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-neutral-300 focus:outline-none focus:border-transparent transition-all duration-300 text-neutral-900 placeholder-neutral-400 text-lg"
                      placeholder="Ваше полное имя"
                    />
                    <div className="input-line"></div>
                  </div>

                  {/* Phone Input */}
                  <div
                    className={`form-field input-wrapper ${
                      focused === "phone" ? "focused" : ""
                    }`}
                  >
                    <label className="block text-xs font-semibold text-neutral-900 mb-3 uppercase tracking-wider">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused("")}
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-neutral-300 focus:outline-none focus:border-transparent transition-all duration-300 text-neutral-900 placeholder-neutral-400 text-lg"
                      placeholder="+998 (90) 123-45-67"
                    />
                    <div className="input-line"></div>
                  </div>

                  {/* Description Textarea */}
                  <div
                    className={`form-field input-wrapper ${
                      focused === "description" ? "focused" : ""
                    }`}
                  >
                    <label className="block text-xs font-semibold text-neutral-900 mb-3 uppercase tracking-wider">
                      Сообщение
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      onFocus={() => setFocused("description")}
                      onBlur={() => setFocused("")}
                      required
                      rows="4"
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-neutral-300 focus:outline-none focus:border-transparent transition-all duration-300 text-neutral-900 placeholder-neutral-400 resize-none text-lg"
                      placeholder="Расскажите нам, что вы думаете..."
                    />
                    <div className="input-line"></div>
                  </div>

                  {/* Turnstile Widget */}
                  <div className="form-field turnstile-wrapper">
                    <div id="turnstile-container"></div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !turnstileToken}
                    className="form-field relative w-full py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group mt-8"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-wider text-sm">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Отправка
                        </>
                      ) : (
                        <>
                          Отправить сообщение
                          <svg
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </>
            ) : (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-neutral-900 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="success-checkmark"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3
                  className="text-3xl font-bold mb-3 text-neutral-900"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Сообщение отправлено
                </h3>
                <p className="text-neutral-600">
                  Мы свяжемся с вами в ближайшее время
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsModal;
