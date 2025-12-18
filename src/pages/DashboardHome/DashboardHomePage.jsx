import { AnalyticsProvider } from "../../hooks/Analytics/AnalyticsContext"
import DashboardHomeLayout from "../../layouts/DashboardHomeLayout"
import MainLayout from "../../layouts/MainLayout";



function DashboardHomePage() {
    return (
        <>
            <AnalyticsProvider>
                <MainLayout>
                    <DashboardHomeLayout></DashboardHomeLayout>

                </MainLayout>
            </AnalyticsProvider>
        </>
    )
}

export default DashboardHomePage;