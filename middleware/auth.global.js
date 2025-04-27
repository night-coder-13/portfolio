export default defineNuxtRouteMiddleware((to, from) => {
  // لیست مسیرهایی که نیاز به احراز هویت ندارند
  const excludedRoutes = ["/login", "/sass" ,"/" ,"/id"];

  // اگر مسیر فعلی در لیست استثناء‌ها باشد، اجرا نکن
  if (excludedRoutes.includes(to.path)) {
    return;
  }

  const token = useCookie("token");
 
    if (!token.value) {
      return navigateTo("/id");
    }
});
