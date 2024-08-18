import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/IndexPage.vue') },
      { path: 'CustomerManagement', component: () => import('@/pages/CustomerManagement.vue') },
      { path: 'VerificationApplication', component: () => import('@/pages/VerificationApplication.vue') },
      { path: 'VerificationContract', component: () => import('@/pages/VerificationContract.vue') },
    ],
  },
  {
    path: '/login',
    component: () => import('@/layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/LoginPage.vue') },
    ],
  },
  {
    path: '/register',
    component: () => import('@/layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/RegisterPage.vue') },
    ],
  },
  {
    path: '/verificationaction',
    component: () => import('@/layouts/VerificationActionLayout.vue'),
    children: [
      {
        path: 'Preparation',
        children: [
          { path: 'ScheduleNotice', component: () => import('@/pages/VerificationAction/Preparation/ScheduleNotice.vue') },
          { path: 'EstablishedNotice', component: () => import('@/pages/VerificationAction/Preparation/EstablishedNotice.vue') },
        ],
      },
      {
        path: 'BeforeVerification',
        children: [
          { path: 'VerificationReport', component: () => import('@/pages/VerificationAction/BeforeVerification/VerificationReport.vue') },
          { path: 'RegionalPlan', component: () => import('@/pages/VerificationAction/BeforeVerification/RegionalPlan.vue') },
          { path: 'PostingTable', component: () => import('@/pages/VerificationAction/BeforeVerification/PostingTable.vue') },
        ],
      },
      {
        path: 'AfterVerification',
        children: [
          { path: 'CheckDemand', component: () => import('@/pages/VerificationAction/AfterVerification/CheckDemand.vue') },
          { path: 'ReviewTable', component: () => import('@/pages/VerificationAction/AfterVerification/ReviewTable.vue') },
          { path: 'VerificationReport', component: () => import('@/pages/VerificationAction/AfterVerification/VerificationReport.vue') },
          { path: 'EvaluationRecord', component: () => import('@/pages/VerificationAction/AfterVerification/EvaluationRecord.vue') },
        ],
      },
      {
        path: 'Review',
        children: [
          { path: 'CompleteReportReview', component: () => import('@/pages/VerificationAction/Review/CompleteReportReview.vue') },
          { path: 'CommitteeReview', component: () => import('@/pages/VerificationAction/Review/CommitteeReview.vue') },
        ],
      },
      {
        path: 'CompleteVerification',
        children: [
          { path: 'IssueCertificate', component: () => import('@/pages/VerificationAction/CompleteVerification/IssueCertificate.vue') },
          { path: 'CustomerSatisfactionSurvey', component: () => import('@/pages/VerificationAction/CompleteVerification/CustomerSatisfactionSurvey.vue') },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
