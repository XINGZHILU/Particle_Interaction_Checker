export class Particle {
    name: string;
    symbol: string;
    electron_lepton: number;
    muon_lepton: number;
    tau_lepton: number;
    baryon: number;
    strangeness: number;
    lepton: boolean;

    constructor(name: string, symbol: string, charge: number, electron_lepton: number, muon_lepton: number, tau_lepton: number, baryon: number, strangeness: number, lepton: boolean) {
        this.name = name;
        this.symbol = symbol;
        this.electron_lepton = electron_lepton;
        this.muon_lepton = muon_lepton;
        this.tau_lepton = tau_lepton;
        this.baryon = baryon;
        this.strangeness = strangeness;
        this.lepton = lepton;
    }
}

const neutron = new Particle(
    'Neutron', 'n', 0, 0, 0, 0, 1, 0, false
);

const proton = new Particle(
    'Proton', 'p', 1, 0, 0, 0, 1, 0, false
);

const electron = new Particle(
    'Electron', 'e^{-}', -1, 1, 0, 0, 0, 0, true
);

const electron_neutrino = new Particle(
    'Electron Neutrino', '\\nu_{e}', 0, 1, 0, 0, 0, 0, true
);

const muon_neutrino = new Particle(
    'Muon Neutrino', '\\nu_{\\mu}', 0, 0, 1, 0, 0, 0, true
);

const tau_neutrino = new Particle(
    'Tau Neutrino', '\\nu_{\\tau}', 0, 0, 0, 1, 0, 0, true
);


const positron = new Particle(
    'Positron', 'e^{+}', 1, 1, 0, 0, 0, 0, true
);

const anti_electron_neutrino = new Particle(
    'Anti Electron Neutrino', '\\bar{\\nu}_{e}', 0, 1, 0, 0, 0, 0, true
);


const pi_plus = new Particle(
    'Pion+', '\\pi^{+}', 1, 0, 0, 0, 0, 0, false
);

const pi_minus = new Particle(
    'Pion-', '\\pi^{-}', -1, 0, 0, 0, 0, 0, false
);

const pi_zero = new Particle(
    'Pion0', '\\pi^{0}', 0, 0, 0, 0, 0, 0, false
);

const k_plus = new Particle(
    'Kaon+', 'K^{+}', 1, 0, 0, 0, 0, 0, false
);

const k_minus = new Particle(
    'Kaon-', 'K^{-}', -1, 0, 0, 0, 0, 0, false
);

const k_zero = new Particle(
    'Kaon0', 'K^{0}', 0, 0, 0, 0, 0, 0, false
);

const lambda = new Particle(
    'Lambda', '\\Lambda', 0, 0, 0, 0, 1, 0, false
);

const sigma_plus = new Particle(
    'Sigma+', '\\Sigma^{+}', 1, 0, 0, 0, 1, 0, false
);

const sigma_minus = new Particle(
    'Sigma-', '\\Sigma^{-}', -1, 0, 0, 0, 1, 0, false
);

const sigma_zero = new Particle(
    'Sigma0', '\\Sigma^{0}', 0, 0, 0, 0, 1, 0, false
);

const xi_minus = new Particle(
    'Xi-', '\\Xi^{-}', -1, 0, 0, 0, 1, 0, false
);

const xi_zero = new Particle(
    'Xi0', '\\Xi^{0}', 0, 0, 0, 0, 1, 0, false
);

const omega_minus = new Particle(
    'Omega-', '\\Omega^{-}', -1, 0, 0, 0, 1, 0, false
);

const omega_zero = new Particle(
    'Omega0', '\\Omega^{0}', 0, 0, 0, 0, 1, 0, false
);

const muon = new Particle(
    'Muon', '\\mu', -1, 0, 1, 0, 0, 0, true
);


const tau = new Particle(
    'Tau', '\\tau', -1, 0, 0, 1, 0, 0, true
);

const anti_muon_neutrino = new Particle(
    'Anti Muon Neutrino', '\\bar{\\nu}_{\\mu}', 0, 0, 1, 0, 0, 0, true
);

const anti_tau_neutrino = new Particle(
    'Anti Tau Neutrino', '\\bar{\\nu}_{\\tau}', 0, 0, 0, 1, 0, 0, true
);


const antimuon = new Particle(
    'Anti Muon', '\\bar{\\mu}', 1, 0, 1, 0, 0, 0, true
);

const antitau = new Particle(
    'Anti Tau', '\\bar{\\tau}', 1, 0, 0, 1, 0, 0, true
);

export const particles = [
    neutron, proton, electron, electron_neutrino, positron, anti_electron_neutrino,
    muon, muon_neutrino, antimuon, anti_muon_neutrino, tau, tau_neutrino, antitau, anti_tau_neutrino,
    pi_plus, pi_minus, pi_zero, k_plus, k_minus, k_zero,
    lambda,
    sigma_plus, sigma_minus, sigma_zero,
    xi_minus, xi_zero, omega_minus, omega_zero,
];

export const leptons = [
    electron, electron_neutrino, positron, anti_electron_neutrino,
    muon, muon_neutrino, antimuon, anti_muon_neutrino,
    tau, tau_neutrino, antitau, anti_tau_neutrino,
]

export const baryons = [
    neutron, proton, lambda, sigma_plus, sigma_minus, sigma_zero, xi_minus, xi_zero, omega_minus, omega_zero,
]

export const mesons = [
    pi_plus, pi_minus, pi_zero, k_plus, k_minus, k_zero,
]

export const strange_particles = [
    lambda, sigma_plus, sigma_minus, sigma_zero, xi_minus, xi_zero, omega_minus, omega_zero,
]