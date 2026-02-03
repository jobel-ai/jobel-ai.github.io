import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// Feature data - Multi-Agent Architecture is #1 selling point
const features = [
    {
        title: '🤖 4-Agent AI Architecture',
        description: 'Manus-style agentic system: Planner → Researcher → Executor → Critic collaborate in iterative loops. Jobel catches its own mistakes before you see them.',
        highlight: '★ CORE DIFFERENTIATOR',
    },
    {
        title: '🧠 Zero-Hallucination Engine',
        description: 'Contract Authority™ extracts verified API contracts from documentation. The AI can ONLY reference what actually exists—no more debugging imaginary APIs.',
        highlight: 'Contract Authority™',
    },
    {
        title: '🛡️ Security-First DNA',
        description: '50+ enterprise security patterns enforced by default. Webhook signatures, JWT validation, secret management—built in, not bolted on.',
        highlight: 'Enterprise Ready',
    },
    {
        title: '🔌 Provider Ecosystem',
        description: 'Pre-certified Auth0 and Stripe integrations. Upload any API docs to onboard new providers with automatic capability extraction.',
        highlight: 'Extensible SDK',
    },
    {
        title: '⚡ Multi-LLM Support',
        description: 'Works with Groq, Claude, OpenAI, Gemini, and OpenRouter. Switch providers without changing code. Free tiers available.',
        highlight: '100+ Models',
    },
    {
        title: '📚 Semantic Knowledge Base',
        description: 'pgvector-powered semantic search across your documentation. Context-aware code generation grounded in real documentation.',
        highlight: 'RAG Pipeline',
    },
];

// Agent data for dedicated section
const agents = [
    { icon: '🎯', name: 'Planner', role: 'Breaks your intent into executable tasks' },
    { icon: '🔍', name: 'Researcher', role: 'Finds relevant documentation & contracts' },
    { icon: '⚡', name: 'Executor', role: 'Generates code grounded in verified APIs' },
    { icon: '🔬', name: 'Critic', role: 'Validates output & requests fixes if needed' },
];

// Stats data
const stats = [
    { value: '100%', label: 'Code Accuracy', sublabel: 'Grounded in documentation' },
    { value: '50+', label: 'Security Rules', sublabel: 'Enterprise patterns' },
    { value: '5+', label: 'LLM Providers', sublabel: 'Swap anytime' },
    { value: '<10s', label: 'To Production', sublabel: 'From intent to code' },
];

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                {/* Badge */}
                <div className={styles.badge}>
                    <span className={styles.badgeIcon}>✨</span>
                    <span>Now Open Source</span>
                </div>

                {/* Main Headline */}
                <Heading as="h1" className={styles.heroTitle}>
                    Meet <span className={styles.highlight}>Jobel</span> — Your AI Solutions Architect
                </Heading>

                {/* Subheadline */}
                <p className={styles.heroSubtitle}>
                    <strong>4 AI agents collaborate</strong> to transform intent into production-ready code.
                    <br />
                    Planner → Researcher → Executor → Critic — <em>catches mistakes before you see them.</em>
                </p>

                {/* CTA Buttons */}
                <div className={styles.buttons}>
                    <Link
                        className="button button--primary button--lg"
                        to="/docs/intro">
                        Get Started in 5 Minutes →
                    </Link>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/architecture/overview">
                        Explore Architecture
                    </Link>
                </div>

                {/* Trust badges */}
                <div className={styles.trustBadges}>
                    <span>Built with</span>
                    <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
                    <img src="https://img.shields.io/badge/Next.js_14-000000?logo=next.js&logoColor=white" alt="Next.js" />
                    <img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white" alt="Node.js" />
                    <img src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white" alt="Docker" />
                </div>
            </div>
        </header>
    );
}

function FeatureCard({ title, description, highlight }) {
    return (
        <div className={clsx('col col--4', styles.featureCol)}>
            <div className={styles.featureCard}>
                <div className={styles.featureHighlight}>{highlight}</div>
                <h3 className={styles.featureTitle}>{title}</h3>
                <p className={styles.featureDescription}>{description}</p>
            </div>
        </div>
    );
}

function FeaturesSection() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Why Engineers Choose <span className={styles.highlight}>Jobel</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Not a replacement for engineers—a superpower for them.
                    </p>
                </div>
                <div className="row">
                    {features.map((props, idx) => (
                        <FeatureCard key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StatsSection() {
    return (
        <section className={styles.statsSection}>
            <div className="container">
                <div className={styles.statsGrid}>
                    {stats.map((stat, idx) => (
                        <div key={idx} className={styles.statCard}>
                            <div className={styles.statValue}>{stat.value}</div>
                            <div className={styles.statLabel}>{stat.label}</div>
                            <div className={styles.statSublabel}>{stat.sublabel}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Dedicated Agent Architecture Section
function AgentSection() {
    return (
        <section className={styles.agentSection}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.highlight}>Manus-Style</span> Multi-Agent Architecture
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Four specialized AI agents work in iterative loops—catching mistakes before you see them.
                    </p>
                </div>
                <div className={styles.agentGrid}>
                    {agents.map((agent, idx) => (
                        <div key={idx} className={styles.agentCard}>
                            <div className={styles.agentIcon}>{agent.icon}</div>
                            <h3 className={styles.agentName}>{agent.name}</h3>
                            <p className={styles.agentRole}>{agent.role}</p>
                            {idx < agents.length - 1 && <div className={styles.agentArrow}>→</div>}
                        </div>
                    ))}
                </div>
                <div className={styles.agentLoop}>
                    <div className={styles.loopText}>
                        <strong>Self-Correcting Loop:</strong> If the Critic finds issues, it sends feedback to the Executor for a retry—automatically improving until perfect.
                    </div>
                </div>
            </div>
        </section>
    );
}

function HowItWorksSection() {
    return (
        <section className={styles.howItWorks}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        From Intent to Production in <span className={styles.highlight}>Seconds</span>
                    </h2>
                </div>
                <div className={styles.stepsGrid}>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>1</div>
                        <h3>Describe Your Intent</h3>
                        <p>"Add Stripe subscriptions with Auth0 authentication"</p>
                    </div>
                    <div className={styles.stepArrow}>→</div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>2</div>
                        <h3>4 Agents Collaborate</h3>
                        <p>Plan → Research → Execute → Validate in loops</p>
                    </div>
                    <div className={styles.stepArrow}>→</div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>3</div>
                        <h3>Get Validated Code</h3>
                        <p>Self-corrected, security-validated, production-ready</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className={styles.ctaSection}>
            <div className="container">
                <div className={styles.ctaContent}>
                    <h2>Ready to Ship Faster?</h2>
                    <p>Join developers who've stopped debugging hallucinated APIs.</p>
                    <div className={styles.ctaButtons}>
                        <Link
                            className="button button--primary button--lg"
                            to="/docs/guides/quickstart">
                            Start Building Now
                        </Link>
                        <Link
                            className="button button--secondary button--lg"
                            href="https://github.com/jobel-ai/jobel-ai.github.io">
                            ⭐ Star on GitHub
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title="Your AI Solutions Architect"
            description="Enterprise-grade AI platform that transforms developer intent into production-ready, security-validated code. Zero hallucinations, maximum velocity.">
            <HomepageHeader />
            <main>
                <StatsSection />
                <AgentSection />
                <FeaturesSection />
                <HowItWorksSection />
                <CTASection />
            </main>
        </Layout>
    );
}
