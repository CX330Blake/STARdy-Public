// package com.stardy.backend.security;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.web.SecurityFilterChain;

// @Configuration
// @EnableWebSecurity
// public class SecurityConfig {

//     @Bean
//     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//         http
//             .csrf(csrf -> csrf.disable()) // 禁用CSRF
//             .authorizeHttpRequests(authorize -> authorize
//                 .requestMatchers("/api/**").permitAll() // 允许所有/api路径的请求
//                 .anyRequest().authenticated()
//             );
//         return http.build();
//     }
// }


