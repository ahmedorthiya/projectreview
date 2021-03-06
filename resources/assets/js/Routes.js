import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  MyPlan as MyPlanView,
  Logout as LogoutView, AdminPanel, WebUsers, Coupons, SubscribedUsers,
  ReferralLink as ReferralView,
  UsersEarning as UsersEarningView,
} from './views';

import ForgotPasswordView from "./views/ForgotPassword";


const Routes = props => {



  return (
    <Switch>
      <Redirect
        exact
        from="/"

        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        authRequired
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        authRequired
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout

        component={ProductListView}
        exact
        authRequired
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={MyPlanView}
        exact
        authRequired
        layout={MainLayout}
        path="/myplan"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        authRequired
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        authRequired
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        authRequired
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={ReferralView}
        exact
        authRequired
        layout={MainLayout}
        path="/referral"
      />

      <RouteWithLayout
        component={AdminPanel}
        exact
        authRequired
        admin
        layout={MainLayout}
        path="/admin-panel"
      />



      <RouteWithLayout
        component={WebUsers}
        exact
        authRequired
        admin
        layout={MainLayout}
        path="/admin-panel/users"
      />

      <RouteWithLayout
        component={Coupons}
        exact
        authRequired
        admin
        layout={MainLayout}
        path="/admin-panel/coupons"
      />

      <RouteWithLayout
        component={SubscribedUsers}
        exact
        authRequired
        admin
        layout={MainLayout}
        path="/admin-panel/subscribed-users"
      />

      <RouteWithLayout
        component={UsersEarningView}
        exact
        authRequired
        admin
        layout={MainLayout}
        path="/admin-panel/users-earning"
      />







      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/login/google/callback"
      />



      <RouteWithLayout
        component={ForgotPasswordView}
        exact
        layout={MinimalLayout}
        path="/forgot-password"
      />

      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />

      <RouteWithLayout
        component={LogoutView}
        exact
        authRequired
        layout={MinimalLayout}
        path="/logout"
      />

      <Redirect to="/not-found" />
    </Switch>
  );
};



export default Routes;
