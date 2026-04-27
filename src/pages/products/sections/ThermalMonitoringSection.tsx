import image from "@/assets/home_assets/image12.jpg";
import ProductSectionLayout from "@/pages/products/ProductSectionLayout";

const ThermalMonitoringSection = () => (
  <ProductSectionLayout
    id='thermal-monitoring'
    title='Thermal Monitoring'
    short='Condition visibility solutions'
    summary='Our thermal monitoring solutions help clients see temperature-related issues sooner, support preventive action, and improve equipment oversight.'
    details='They are valuable for anomaly detection, condition monitoring, and maintenance diagnostics around critical assets. The benefit is earlier visibility into developing issues and better-informed maintenance planning, supported by solution selection, workflow guidance, and help with operational interpretation.'
    image={image}
    imageAlt='Thermal monitoring and condition assessment'
  />
);

export default ThermalMonitoringSection;
