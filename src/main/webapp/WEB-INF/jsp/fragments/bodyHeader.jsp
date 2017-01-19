<%@page contentType="text/html" pageEncoding="UTF-8" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <a href="meals" class="navbar-brand"><fmt:message key="app.title"/></a>

        <div class="collapse navbar-collapse">
            <form:form class="navbar-form navbar-right" action="logout" method="post">
                <sec:authorize access="isAuthenticated()">
                    <a class="btn btn-info" role="button" href="products"><fmt:message key="products.title"/></a>
                    <a class="btn btn-info" role="button" href="orders"><fmt:message key="orders.title"/></a>
                    <a class="btn btn-info" role="button" href="customers"><fmt:message key="customers.title"/></a>
                    <sec:authorize access="hasRole('ROLE_ADMIN')">
                        <a class="btn btn-info" role="button" href="users"><fmt:message key="users.title"/></a>
                    </sec:authorize>
                    <a class="btn btn-info" role="button" href="profile">${userTo.name} <fmt:message key="app.profile"/></a>
                    <input type="submit" class="btn btn-primary" value="<fmt:message key="app.logout"/>">
                </sec:authorize>
            </form:form>
        </div>
    </div>
</div>