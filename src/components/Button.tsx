 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/src/components/Button.tsx
index 0000000000000000000000000000000000000000..ca7104ac0c703811e9aa41debefd3c054b1e3107 100644
--- a//dev/null
+++ b/src/components/Button.tsx
@@ -0,0 +1,13 @@
+import React from 'react';
+
+export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
+  variant?: 'outline' | 'solid';
+}
+
+const Button: React.FC<ButtonProps> = ({ variant = 'solid', children, ...props }) => (
+  <button {...props} className={props.className}>
+    {children}
+  </button>
+);
+
+export default Button;
 
EOF
)
