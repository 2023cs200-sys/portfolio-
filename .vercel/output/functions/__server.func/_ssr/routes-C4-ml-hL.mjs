import { r as __toESM } from "../_runtime.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { d as SKILL_CARDS, l as POSTS, n as CERTS, o as JOURNEY, r as CONTACTS, t as ACADEMIC, u as PROJECTS } from "./data-oqjrdtCh.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-9AEqUIC5.mjs";
import { a as Github, c as Container, d as Brain, f as BrainCircuit, i as Linkedin, l as Coins, n as Menu, o as FileText, r as Mail, s as ExternalLink, t as ShieldCheck, u as Cloud } from "../_libs/lucide-react.mjs";
import { t as Drawer } from "../_libs/vaul.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C4-ml-hL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ROLES = [
	"dev_security_cloud",
	"cybersecurity_enthusiast",
	"machine_learning_explorer",
	"blockchain_curious",
	"full_stack_developer"
];
function TypingRoles() {
	const [roleIdx, setRoleIdx] = (0, import_react.useState)(0);
	const [text, setText] = (0, import_react.useState)("");
	const [deleting, setDeleting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const current = ROLES[roleIdx];
		const speed = deleting ? 35 : 70;
		if (!deleting && text === current) {
			const t = setTimeout(() => setDeleting(true), 1600);
			return () => clearTimeout(t);
		}
		if (deleting && text === "") {
			setDeleting(false);
			setRoleIdx((i) => (i + 1) % ROLES.length);
			return;
		}
		const t = setTimeout(() => {
			setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
		}, speed);
		return () => clearTimeout(t);
	}, [
		text,
		deleting,
		roleIdx
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "terminal-cursor text-foreground",
		children: text
	});
}
var project_unipulse_default = "/assets/project-unipulse-DPTUZCis.jpg";
var Password_Strength_Analyzer_default = "/assets/Password-Strength-Analyzer-Bp36bD5C.jpg";
var gold_priceML_default = "/assets/gold-priceML-BpAjsy77.jpg";
var cafeai_default = "/assets/cafeai-BdMZmYHo.jpg";
var skysecure_default = "/assets/skysecure-micQYexX.jpg";
var ZenCrypt_default = "/assets/ZenCrypt-CVTl9LWz.jpg";
var ludo_game_default = "/assets/ludo-game-VCZHd4rV.jpg";
var IPL_ML_default = "/assets/IPL_ML-B54MzHtd.jpg";
var portrait_default = "/assets/portrait-D1QCtSrP.jpg";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Drawer$1 = ({ shouldScaleBackground = true, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Root, {
	shouldScaleBackground,
	...props
});
Drawer$1.displayName = "Drawer";
var DrawerTrigger = Drawer.Trigger;
var DrawerPortal = Drawer.Portal;
Drawer.Close;
var DrawerOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Overlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80", className),
	...props
}));
DrawerOverlay.displayName = Drawer.Overlay.displayName;
var DrawerContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DrawerPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drawer.Content, {
	ref,
	className: cn("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }), children]
})] }));
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("grid gap-1.5 p-4 text-center sm:text-left", className),
	...props
});
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("mt-auto flex flex-col gap-2 p-4", className),
	...props
});
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Title, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DrawerTitle.displayName = Drawer.Title.displayName;
var DrawerDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DrawerDescription.displayName = Drawer.Description.displayName;
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var fetchCv = createServerFn({ method: "GET" }).handler(createSsrRpc("3eb93f6e52ddcffb548a468613de7331dd05109ff389621135071829b9ed3947"));
var projectImages = {
	"01": project_unipulse_default,
	"02": Password_Strength_Analyzer_default,
	"03": gold_priceML_default,
	"04": cafeai_default,
	"05": skysecure_default,
	"06": ZenCrypt_default,
	"07": ludo_game_default,
	"08": IPL_ML_default
};
var PROJECTS_WITH_IMGS = PROJECTS.map((p) => ({
	...p,
	img: projectImages[p.n]
}));
var certIcons = {
	CERT_01: ShieldCheck,
	CERT_02: Coins,
	CERT_03: BrainCircuit,
	CERT_04: Brain,
	CERT_05: Cloud,
	CERT_06: Container
};
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "scanline-overlay",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-center gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-accent",
								children: "Hashini"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tracking-tight",
								children: "Gayathri"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden gap-6 text-xs sm:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#academic",
									className: "text-dim transition-colors hover:text-accent",
									children: "ACADEMIC"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#projects",
									className: "text-dim transition-colors hover:text-accent",
									children: "PROJECTS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#stack",
									className: "text-dim transition-colors hover:text-accent",
									children: "STACK"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#journey",
									className: "text-dim transition-colors hover:text-accent",
									children: "JOURNEY"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#posts",
									className: "text-dim transition-colors hover:text-accent",
									children: "POSTS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#certs",
									className: "text-dim transition-colors hover:text-accent",
									children: "CERTS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									className: "text-dim transition-colors hover:text-accent",
									children: "CONTACT"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drawer$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerTrigger, {
							className: "sm:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5 text-foreground" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DrawerContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerTitle, {
							className: "text-left text-xs font-semibold uppercase tracking-widest text-accent",
							children: "Navigation"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#academic",
									className: "rounded-lg px-4 py-3 text-sm text-dim transition-colors hover:bg-accent/5 hover:text-accent",
									children: "ACADEMIC"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#projects",
									className: "rounded-lg px-4 py-3 text-sm text-dim transition-colors hover:bg-accent/5 hover:text-accent",
									children: "PROJECTS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#stack",
									className: "rounded-lg px-4 py-3 text-sm text-dim transition-colors hover:bg-accent/5 hover:text-accent",
									children: "STACK"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#journey",
									className: "rounded-lg px-4 py-3 text-sm text-dim transition-colors hover:bg-accent/5 hover:text-accent",
									children: "JOURNEY"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#posts",
									className: "rounded-lg px-4 py-3 text-sm text-dim transition-colors hover:bg-accent/5 hover:text-accent",
									children: "POSTS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#certs",
									className: "rounded-lg px-4 py-3 text-sm text-dim transition-colors hover:bg-accent/5 hover:text-accent",
									children: "CERTS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									className: "rounded-lg px-4 py-3 text-sm text-dim transition-colors hover:bg-accent/5 hover:text-accent",
									children: "CONTACT"
								})
							]
						})] })] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				className: "relative z-10 pt-32 pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "relative mx-auto mb-32 max-w-6xl px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid-bg pointer-events-none absolute inset-0 -z-10",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-center gap-12 md:grid-cols-[1fr_280px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "animate-fade-up space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 rounded bg-accent/5 px-2 py-1 text-[10px] text-accent ring-1 ring-accent/20",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "size-1.5 rounded-full bg-accent",
											style: { animation: "pulse-dot 1.6s ease-in-out infinite" }
										}), "SYSTEM ACTIVE · ACCEPTING_OPPORTUNITIES"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "max-w-[28ch] text-balance text-4xl font-medium leading-tight tracking-tight md:text-5xl",
										children: "Exploring technology, securing the future, building digital solutions."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "max-w-[70ch] text-pretty text-base text-dim",
										children: [
											"Hello! I'm Hashini Gayathri, ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											" A Computer Science undergraduate passionate about cybersecurity, cloud infrastructure, and machine learning. I enjoy building thoughtful systems and sharing my knowledge. Through continuous learning and hands-on projects, I strive to create secure, scalable, and impactful digital solutions."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2 text-sm text-dim",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-accent",
												children: "$"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "locate --roles" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypingRoles, {})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-3 pt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#contact",
											className: "inline-flex h-9 items-center gap-2 rounded bg-accent px-4 text-sm font-semibold text-accent-foreground ring-1 ring-accent transition-transform hover:bg-accent/90 active:scale-95",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "$" }), " GET_IN_TOUCH"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: async () => {
												const result = await fetchCv();
												const blob = new Blob([Uint8Array.from(atob(result.data), (c) => c.charCodeAt(0))], { type: result.type === "pdf" ? "application/pdf" : "text/plain" });
												const url = URL.createObjectURL(blob);
												const a = document.createElement("a");
												a.href = url;
												a.download = result.filename;
												document.body.appendChild(a);
												a.click();
												document.body.removeChild(a);
												URL.revokeObjectURL(url);
											},
											className: "inline-flex h-9 cursor-pointer items-center gap-2 rounded border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground/30",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "size-4 shrink-0",
												fill: "none",
												viewBox: "0 0 24 24",
												strokeWidth: "1.5",
												stroke: "currentColor",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
												})
											}), "FETCH_CV.PDF"]
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mx-auto w-full max-w-[280px] animate-fade-up",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute -inset-2 rounded-xl border border-accent/20",
										"aria-hidden": true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute -top-3 left-3 z-10 rounded bg-background px-2 text-[10px] text-accent",
										children: "$whoami:Final Year CS Undergraduate @ UCSC"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative overflow-hidden rounded-xl border border-border bg-surface",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: portrait_default,
												alt: "Portrait",
												width: 1024,
												height: 1024,
												className: "aspect-square w-full object-cover opacity-90 mix-blend-luminosity"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute bottom-2 left-2 right-2 flex items-center justify-between text-[9px] text-accent/80",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "size-1.5 rounded-full bg-accent",
														style: { animation: "pulse-dot 1.6s ease-in-out infinite" }
													}), "LIVE"]
												})
											})
										]
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "academic",
						className: "mx-auto mb-32 max-w-6xl px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
								label: "01. Academic Background",
								right: "EDUCATION"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-10 max-w-[58ch]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-medium leading-tight",
									children: "Academic foundation & credentials"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-dim",
									children: "A chronological record of my formal education and qualifications."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4",
								children: ACADEMIC.map((a, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "group rounded-xl border border-border bg-surface/40 p-6 transition-colors hover:border-accent/30 hover:bg-surface/70",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "text-base font-medium text-foreground",
													children: a.topic
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-flex w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-semibold tracking-widest text-accent",
													children: a.badge
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-dim",
												children: a.institution
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm leading-relaxed text-foreground/80",
												children: a.description
											})
										]
									})
								}, idx))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "projects",
						className: "mx-auto mb-32 max-w-6xl px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
							label: "02. Featured Projects",
							right: "Projects"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-6",
							children: PROJECTS_WITH_IMGS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
								className: "group relative rounded-xl border border-border bg-surface/40 p-6 transition-colors hover:bg-surface/70",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-8 md:flex-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "order-2 flex-1 md:order-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mb-4 flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-dim",
													children: p.n
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-lg font-medium",
													children: p.title
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mb-6 max-w-[60ch] text-pretty text-sm leading-relaxed text-dim",
												children: p.desc
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap items-center gap-2",
												children: p.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded border border-border px-2 py-0.5 text-[10px]",
													children: t
												}, t))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-4 flex flex-wrap items-center gap-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
														href: p.link1,
														className: "inline-flex h-8 items-center gap-2 rounded border border-accent/40 bg-accent/5 px-3 text-[10px] font-semibold tracking-widest text-accent transition-colors hover:bg-accent/10 hover:text-accent",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
															className: "size-3.5",
															strokeWidth: 1.5
														}), p.cta1.replace("→ ", "")]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
														href: p.link2,
														className: "inline-flex h-8 items-center gap-2 rounded border border-accent/40 bg-accent/5 px-3 text-[10px] font-semibold tracking-widest text-accent transition-colors hover:bg-accent/10 hover:text-accent",
														children: [p.cta2.includes("DOCUMENTATION") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
															className: "size-3.5",
															strokeWidth: 1.5
														}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
															className: "size-3.5",
															strokeWidth: 1.5
														}), p.cta2.replace("→ ", "")]
													}),
													p.link3 && p.cta3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
														href: p.link3,
														className: "inline-flex h-8 items-center gap-2 rounded border border-accent/40 bg-accent/5 px-3 text-[10px] font-semibold tracking-widest text-accent transition-colors hover:bg-accent/10 hover:text-accent",
														children: [p.cta3.includes("DOCUMENTATION") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
															className: "size-3.5",
															strokeWidth: 1.5
														}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
															className: "size-3.5",
															strokeWidth: 1.5
														}), p.cta3.replace("→ ", "")]
													})
												]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "order-1 w-full shrink-0 md:order-2 md:w-120",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "overflow-hidden rounded-lg border border-border bg-surface",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: p.img,
												alt: `${p.title} preview`,
												width: 1024,
												height: 640,
												loading: "lazy",
												className: "aspect-video w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
											})
										})
									})]
								})
							}, p.n))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "stack",
						className: "mx-auto mb-32 max-w-6xl px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
								label: "03. Tech Status",
								right: "UPTIME 100%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-10 max-w-[58ch]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-medium leading-tight",
									children: "A full-spectrum technical toolkit"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-dim",
									children: "Skills calibrated across the stack — from low-level systems to cloud, security and AI."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
								children: SKILL_CARDS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group rounded-xl border border-border bg-surface/40 p-5 transition-colors hover:border-accent/30 hover:bg-surface/70",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-[11px] font-semibold tracking-widest text-accent",
											children: c.head
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[9px] text-dim",
											children: [c.items.length, " MOD"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-3",
										children: c.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-1 flex items-center justify-between text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground/90",
												children: i.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[10px] text-dim",
												children: [i.level, "%"]
											})]
										}) }, i.name))
									})]
								}, c.head))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "journey",
						className: "mx-auto mb-32 max-w-6xl px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
								label: "04. Learning Journey",
								right: "LOG_STREAM"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-10 max-w-[58ch]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-medium leading-tight",
									children: "Where I am, and where I'm headed"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-dim",
									children: "A transparent view of my continuous learning across the tech stack."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 md:grid-cols-3",
								children: JOURNEY.map((j) => {
									const colorClass = j.color === "accent" ? "text-accent border-accent/30" : j.color === "warn" ? "text-warn border-warn/30" : "text-danger border-danger/30";
									const dotClass = j.color === "accent" ? "bg-accent" : j.color === "warn" ? "bg-warn" : "bg-danger";
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `relative rounded-xl border bg-surface/40 p-6 transition-colors hover:bg-surface/70 ${colorClass}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mb-4 flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[10px] font-semibold tracking-widest",
													children: [
														j.tag,
														" ",
														j.title.toUpperCase()
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-2 rounded-full ${dotClass}` })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "mb-1 text-lg font-medium text-foreground",
												children: j.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mb-5 text-[10px] tracking-widest text-dim",
												children: j.state
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "space-y-2 text-sm",
												children: j.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-center gap-2 text-foreground/90",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-1 ${dotClass}` }), i]
												}, i))
											})
										]
									}, j.title);
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "posts",
						className: "mx-auto mb-32 max-w-6xl px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
								label: "05. Knowledge Share",
								right: "LINKEDIN_POSTS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-10 max-w-[58ch]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-medium leading-tight",
									children: "Educational content & insights"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-dim",
									children: "Sharing cybersecurity and tech knowledge through LinkedIn articles."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
								children: POSTS.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: post.href,
									className: "group flex items-center gap-4 rounded-xl border border-border bg-surface/40 p-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface/70",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex size-10 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/5 text-accent",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
											className: "size-5",
											strokeWidth: 1.5
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mb-1 text-[9px] font-semibold tracking-widest text-accent",
												children: [
													"[",
													post.code,
													"]"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-sm font-medium leading-snug text-foreground transition-colors group-hover:text-accent",
												children: post.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 block text-[9px] tracking-widest text-dim",
												children: post.platform
											})
										]
									})]
								}, post.code))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "certs",
						className: "mx-auto mb-32 max-w-6xl px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
								label: "06. Certifications & Badges",
								right: "VERIFIED"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-10 max-w-[58ch]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-medium leading-tight",
									children: "Certifications & Badges"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-dim",
									children: "Continuous learning and professional development."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: CERTS.map((c) => {
									const isEarned = c.status === "EARNED";
									const isInProgress = c.status === "IN_PROGRESS";
									const statusColor = isEarned ? "text-accent bg-accent/10 ring-accent/20" : isInProgress ? "text-warn bg-warn/10 ring-warn/20" : "text-dim bg-foreground/5 ring-border";
									const Icon = certIcons[c.code];
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "group rounded-xl border border-border bg-surface/40 p-5 transition-colors hover:border-accent/30 hover:bg-surface/70",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-4 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-center gap-2 text-[10px] tracking-widest text-dim",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-semibold text-accent",
													children: [
														"[",
														c.code,
														"]"
													]
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `rounded px-2 py-0.5 text-[9px] font-semibold tracking-widest ring-1 ${statusColor}`,
												children: c.status
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex size-12 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/5 text-accent",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
													className: "size-6",
													strokeWidth: 1.5
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0 flex-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "text-base font-medium leading-snug",
														children: c.name
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-xs text-dim",
														children: c.issuer
													}),
													c.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-2 text-xs leading-relaxed text-foreground/70",
														children: c.description
													})
												]
											})]
										})]
									}, c.code);
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "contact",
						className: "mx-auto max-w-6xl px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
								label: "07. Open Connection",
								right: "EOF"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-10 max-w-[58ch] text-sm text-dim",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-accent",
									children: "$"
								}), " echo \"Looking for internship & full-time opportunities in SWE, security and cloud.\""]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 md:grid-cols-3",
								children: CONTACTS.map((c) => {
									const Icon = c.label === "EMAIL" ? Mail : c.label === "LINKEDIN" ? Linkedin : Github;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: c.href,
										className: "group relative overflow-hidden rounded-xl border border-border bg-surface/40 p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface/70",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mb-6 flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[10px] font-semibold tracking-widest text-accent",
													children: [
														"[",
														c.label,
														"]"
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-dim transition-colors group-hover:text-accent",
													children: "→"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mb-4 flex size-12 items-center justify-center rounded-lg border border-accent/30 bg-accent/5 text-accent",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
													className: "size-6",
													strokeWidth: 1.5
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mb-2 text-[10px] text-dim",
												children: c.cmd
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-base font-medium tracking-tight text-foreground transition-colors group-hover:text-accent",
												children: c.handle
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-6 flex items-center gap-2 text-[10px] text-dim",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "size-1.5 rounded-full bg-accent",
													style: { animation: "pulse-dot 1.6s ease-in-out infinite" }
												}), "CHANNEL_OPEN"]
											})
										]
									}, c.label);
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "relative z-10 border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 md:flex-row md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold text-accent",
						children: "Designed and Developed by Hashini Gayathri"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[10px] text-dim",
						children: ["Hashini Gayathri · © ", (/* @__PURE__ */ new Date()).getFullYear()]
					})]
				})
			})
		]
	});
}
function SectionHeader({ label, right }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-10 flex items-center gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xs font-semibold uppercase tracking-widest text-accent",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] text-dim",
				children: right
			})
		]
	});
}
//#endregion
export { Index as component };
