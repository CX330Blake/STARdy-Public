package com.stardy.backend.filter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;

@Component
public class NgrokSkipBrowserWarningFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        // 檢查是否運作
        System.out.println("Processing request: " + request.getRequestURI());

        
        response.addHeader("ngrok-skip-browser-warning", "69420");

        
        filterChain.doFilter(request, response);
    }
}
