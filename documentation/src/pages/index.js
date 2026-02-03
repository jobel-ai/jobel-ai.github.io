import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// Premium Feature data - Focus on technical reliability
const features = [
    {
        title: 'Multi-Agent Orchestration',
        description: 'Collaborative loop between specialists: Planner, Researcher, Executor, and Critic. Each agent validates the others to ensure production-grade output.',
    },
    {
        title: 'Zero-Hallucination Engine',
        description: 'Hardened verification against API contracts. Jobel refuses to generate methods that don’t exist in the verified provider documentation.',
    },
    {
        title: 'Enterprise Security DNA',
        description: 'Automatic injection of secure patterns: JWT validation, secret masking, and webhook signature verification are standard, not optional.',
    },
    {
        title: 'Dynamic Provider Onboarding',
        description: 'Onboard any API by providing documentation. Jobel automatically extracts capabilities and generates the necessary integration modules.',
    },
    {
        title: 'Model Agnostic Scale',
        description: 'Production-ready support for GPT-4, Claude 3, and Gemini 1.5. Switch providers with a single environment variable—no code changes required.',
    },
    {
        title: 'Hybrid Knowledge Base',
        description: 'Context-aware generation grounded in your specific documentation. Integrated RAG pipeline ensures high-fidelity code alignment.',
    },
];

const agents = [
    { name: '01. Planner', role: 'Architects the implementation strategy' },
    { name: '02. Researcher', role: 'Verifies API signatures and documentation' },
    { name: '03. Executor', role: 'Generates hardened, type-safe implementation' },
    { name: '04. Critic', role: 'Security auditing and edge-case validation' },
];

const stats = [
    { value: '0%', label: 'Hallucination Rate' },
    { value: '50+', label: 'Security Rules' },
    { value: '100ms', label: 'Average Latency' },
    { value: 'YC-2025', label: 'Foundation' },
];

function HomepageHeader() {
    return (
        <header className={styles.heroBanner}>
            <div className="container">
                <div className={styles.badge}>
                    <span>Version 1.0 — Now Open Source</span>
                </div>

                <Heading as="h1" className={styles.heroTitle}>
                    Build like a <span className={styles.highlight}>Solutions Architect.</span>
                </Heading>

                <p className={styles.heroSubtitle}>
                    An enterprise-grade multi-agent system that transforms plain intent into
                    hardened, security-validated production code.
                </p>

                <div className={styles.buttons}>
                    <Link
                        className="button button--primary button--lg"
                        to="/docs/">
                        Start Building
                    </Link>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/architecture/overview">
                        Technical Architecture
                    </Link>
                </div>
            </div>
        </header>
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeaturesSection() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Developer-First Infrastructure
                    </h2>
                </div>
                <div className="row">
                    {features.map((feature, idx) => (
                        <div key={idx} className="col col--4 mb-4">
                            <div className={styles.featureCard}>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDescription}>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AgentSection() {
    return (
        <section className={styles.agentSection}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Agentic Orchestration</h2>
                    <p className={styles.sectionSubtitle}>
                        Sequential collaboration that eliminates human error.
                    </p>
                </div>
                <div className={styles.agentGrid}>
                    {agents.map((agent, idx) => (
                        <div key={idx} className={styles.agentCard}>
                            <div className={styles.agentName}>{agent.name}</div>
                            <p className={styles.agentRole}>{agent.role}</p>
                        </div>
                    ))}
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
                    <h2>Ready to ship?</h2>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--primary button--lg"
                            to="/docs/">
                            Get Started
                        </Link>
                        <Link
                            className="button button--secondary button--lg"
                            href="https://github.com/jobel-ai/jobel-ai.github.io">
                            Star on GitHub
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <Layout
            title="Jobel | Agentic Solutions Architect"
            description="Enterprise-grade AI platform for security-validated code generation.">
            <HomepageHeader />
            <main>
                <StatsSection />
                <AgentSection />
                <FeaturesSection />
                <CTASection />
            </main>
        </Layout>
    );
}
