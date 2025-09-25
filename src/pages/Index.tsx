import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Dashboard from '@/components/Dashboard';
import PatientPortal from '@/components/PatientPortal';
import PatientDashboard from '@/components/PatientDashboard';
import Footer from '@/components/Footer';

const Index = () => {
  const [showPatientDashboard, setShowPatientDashboard] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {!showPatientDashboard ? (
        <>
          <Header onShowDashboard={() => setShowPatientDashboard(true)} />
          <Hero />
          <Features />
          <Dashboard />
          <PatientPortal />
          <Footer />
        </>
      ) : (
        <PatientDashboard onBackToHome={() => setShowPatientDashboard(false)} />
      )}
    </div>
  );
};

export default Index;
